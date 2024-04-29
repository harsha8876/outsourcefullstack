import React from 'react';

const Support = () => {
  return (
    <div className='md:mx-20'>
      <div className="mx-auto px-4 py-8 text-justify">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Help and Support</h1>
        </div>
        <div className="text-lg">
          <p className="mb-4">
            Welcome to the Outsource Help and Support page. We're here to assist you with any questions, concerns, or issues you may encounter while using our platform. Below, you'll find information on how to get in touch with us and resources to help you find answers to common questions.
          </p>
          <h2 className="text-xl font-bold mb-4">Contact Us:</h2>
          <p className="mb-4">
            If you need assistance or have any inquiries, please don't hesitate to reach out to our support team. You can contact us via email at <a href="mailto:outsource809@gmail.com" className="text-blue-500 underline">outsource809@gmail.com</a>
          </p>
          <h2 className="text-xl font-bold mb-4">FAQs (Frequently Asked Questions):</h2>
          <p className="mb-4">
            Before reaching out to our support team, you may find the answers to your questions in our Frequently Asked Questions (FAQs) section. We've compiled a list of common inquiries and their solutions to provide you with quick and easy assistance. Browse our FAQs <a href="#" className="text-blue-500 underline">here</a> to see if your question has already been answered.
          </p>
          <h2 className="text-xl font-bold mb-4">Feedback and Suggestions:</h2>
          <p className="mb-4">
            We value your feedback and suggestions as they help us improve the Outsource platform for all users. If you have any ideas for features, enhancements, or general feedback, we'd love to hear from you. Send us your feedback and help us continue to enhance your Outsource experience.
          </p>
          <h2 className="text-xl font-bold mb-4">Security and Privacy:</h2>
          <p>
            Your security and privacy are important to us. Learn more about how we protect your data and ensure a secure environment for all users by reviewing our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
