import React from 'react';
import PageHeader from '../components/PageHeader';

const PageName = 'Contact Us';

const ContactPage = () => {
  return (
    <div>
      <PageHeader PageName={PageName} />
      <p>This is the Contact Page.</p>
    </div>
  );
};

export default ContactPage;
