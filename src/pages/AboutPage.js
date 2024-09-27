import React from 'react';
import PageHeader from '../components/PageHeader';

const PageName = 'About This Task Manager';

const AboutPage = () => {
  return (
    <div>
      <PageHeader PageName={PageName} />
      <p>This is a task manager application built with React.</p>
    </div>
  );
};

export default AboutPage;
