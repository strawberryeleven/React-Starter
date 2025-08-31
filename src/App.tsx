import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import AboutPage from './pages/AboutPage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <footer className="bg-light text-center py-4 mt-5">
        <div className="container">
          <p className="text-muted mb-0">
            &copy; 2024 Intern Starter Template. Built with ❤️ for learning.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
