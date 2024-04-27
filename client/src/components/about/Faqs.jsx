import React from 'react';

const Faqs = () => {
  return (
    <div className='md:mx-20'>
      <div className="mx-auto px-4 py-8 text-justify">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Outsource FAQs</h1>
          <p className="mt-4">
            Welcome to the Outsource FAQs page. Below are answers to some common questions about using the Outsource platform.
          </p>
        </div>
        <div className="text-lg">
          <h2 className="text-xl font-bold mb-4">1. What is Outsource?</h2>
          <p className="mb-4">
            Outsource is a freelance marketplace platform that connects clients with freelance professionals across various industries. Outsource provides a platform for efficient collaboration and communication.
          </p>
          <h2 className="text-xl font-bold mb-4">2. How do I sign up for an account?</h2>
          <p className="mb-4">
            Signing up for an account on Outsource is quick and easy. Simply visit our website and click on the "Join" button. You'll be prompted to provide some basic information, such as your name, email address, and desired password. Once you've completed the registration process, you can start exploring the platform.
          </p>
          <h2 className="text-xl font-bold mb-4">3. How does the payment process work?</h2>
          <p className="mb-4">
            Outsource offers a secure payment process for both clients and freelancers. We support various payment methods to accommodate users worldwide, including PayPal, credit/debit cards, and bank transfers.
          </p>
          <h2 className="text-xl font-bold mb-4">6. How do I contact customer support?</h2>
          <p>
            If you have any further questions or encounter any issues while using Outsource, our customer support team is here to help. You can contact us via email at <a href="mailto:outsource809@gmail.com" className="text-blue-500 underline">outsource809@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
