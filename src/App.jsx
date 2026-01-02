import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Success from './components/Success';

function App() {
  const [currentView, setCurrentView] = useState('welcome');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="app-container" style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        {currentView === 'welcome' && (
          <motion.div
            key="welcome"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Welcome onStart={() => setCurrentView('question')} />
          </motion.div>
        )}

        {currentView === 'question' && (
          <motion.div
            key="question"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Question onYes={() => setCurrentView('success')} />
          </motion.div>
        )}

        {currentView === 'success' && (
          <motion.div
            key="success"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Success />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
