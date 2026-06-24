import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract prefix, numeric value, and suffix
    const prefixMatch = value.match(/^[^0-9.]*/);
    const suffixMatch = value.match(/[^0-9.]*$/);
    const numMatch = value.match(/[0-9.]+/);

    const prefix = prefixMatch ? prefixMatch[0] : "";
    const suffix = suffixMatch ? suffixMatch[0] : "";
    
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numMatch[0]);
    const isFloat = numMatch[0].includes('.');

    let start = 0;
    const duration = 1000; // 1s animation duration
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = start + (targetNum - start) * easeProgress;

      let formattedVal = isFloat 
        ? currentVal.toFixed(1) 
        : Math.round(currentVal).toString();

      setDisplayValue(`${prefix}${formattedVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref} className="tabular-nums">{displayValue}</span>;
}
