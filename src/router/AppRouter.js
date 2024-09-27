import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import AboutPage from './../pages/AboutPage';
import ContactPage from './../pages/ContactPage';
import TaskListPage from './../pages/TaskListPage';
import TaskDetailPage from './../pages/TaskDetailPage';
import NotFound from './../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/tasks" element={<TaskListPage />} />
            <Route path="/task" element={<TaskDetailPage />} />
            <Route path="/task/:taskId" element={<TaskDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
