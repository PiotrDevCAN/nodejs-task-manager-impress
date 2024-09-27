import React from 'react';
// import Navigation from './components/Navigation';
import AppRoutes from './router/AppRouter';
import Header from './components/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';

// import './styles/App.css';
// import './styles/NavBar.css';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
        <div className="min-h-full">
          <Header />
          <AppRoutes />
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;
