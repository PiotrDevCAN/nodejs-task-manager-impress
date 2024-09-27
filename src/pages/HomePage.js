import React from 'react';
import PageHeader from '../components/PageHeader';

const PageName = 'Home Page';

const HomePage = () => {
  return (
    <div>
      <PageHeader PageName={PageName}/>

      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
          <p className="text-gray-600">Create and manage your tasks with ease!</p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
