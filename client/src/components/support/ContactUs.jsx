import React from 'react';

const ContactUs = () => {
  return (
    <div className='md:mx-20'>
      <div className="mx-auto px-4 py-8 text-justify">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4">
            Welcome to the Outsource Contact Us page. If you have any questions, concerns, or feedback, we're here to help. Below, you'll find different ways to get in touch with us.
          </p>
        </div>
        <div className="text-lg">
          <h2 className="text-xl font-bold mb-4">Email Support:</h2>
          <p className="mb-4">
            For general inquiries, assistance with your account, or any other questions, you can reach out to our support team via email at <a href="mailto:outsource809@gmail.com" className="text-blue-500 underline">outsource809@gmail.com</a>. We strive to respond to all emails promptly during our business hours.
          </p>
          <h2 className="text-xl font-bold mb-4">Social Media:</h2>
          <p className="mb-4">
            Connect with us on social media for updates, announcements, and additional support. You can find us on <a href="#" className="text-blue-500 underline">Facebook</a>, <a href="#" className="text-blue-500 underline">Twitter</a>, and <a href="#" className="text-blue-500 underline">LinkedIn</a>. Feel free to send us a direct message or tag us in your posts, and we'll do our best to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
