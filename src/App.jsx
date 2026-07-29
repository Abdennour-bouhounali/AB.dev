import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './components/Loader';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <Router>
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;

