import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Loader from './components/Loader';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Intro transition & preloader gate */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
