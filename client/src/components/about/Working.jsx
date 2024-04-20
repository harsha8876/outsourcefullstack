import React from 'react';

const Working = () => {
  return (
    <div className='md:mx-20'>
      <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">How it works</h1>
        {/* Registration */}
        <div className="workflow-section mb-8">
          <h2 className="text-xl font-bold mb-4">1. Registration:</h2>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Freelancers:</h3>
            <p className="text-base">
              Freelancers sign up for an account on the platform by providing their basic information, skills, and portfolio.
            </p>
          </div>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Clients:</h3>
            <p className="text-base">
              Clients create an account by providing their details and project requirements.
            </p>
          </div>
        </div>
        {/* Profile Creation */}
        <div className="workflow-section mb-8">
          <h2 className="text-xl font-bold mb-4">2. Profile Creation:</h2>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Freelancers:</h3>
            <p className="text-base">
              Freelancers create a comprehensive profile showcasing their skills, experience, portfolio, and pricing.
            </p>
          </div>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Clients:</h3>
            <p className="text-base">
              Clients create a project brief detailing their requirements, budget, and timeline.
            </p>
          </div>
        </div>
        {/* Search and Discovery */}
        <div className="workflow-section mb-8">
          <h2 className="text-xl font-bold mb-4">3. Search and Discovery:</h2>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Clients:</h3>
            <p className="text-base">
              Clients can browse through available projects posted by clients or search for specific projects based on their skills and interests.
            </p>
          </div>
        </div>
        {/* Communication and Collaboration */}
        <div className="workflow-section mb-8">
          <h2 className="text-xl font-bold mb-4">5. Communication and Collaboration:</h2>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Freelancers and Clients:</h3>
            <p className="text-base">
              Freelancers and clients communicate through the platform's messaging system to discuss project details, clarify requirements, and negotiate terms.
            </p>
          </div>
        </div>
        {/* Payment Processing */}
        <div className="workflow-section mb-8">
          <h2 className="text-xl font-bold mb-4">7. Payment Processing:</h2>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Secure Transactions:</h3>
            <p className="text-base">
              Payments are processed securely through the platform using trusted payment gateways, providing peace of mind for both freelancers and clients.
            </p>
          </div>
        </div>
        {/* Feedback and Reviews */}
        <div className="workflow-section mb-8">
          <h2 className="text-xl font-bold mb-4">8. Feedback and Reviews:</h2>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">After Project Completion:</h3>
            <p className="text-base">
              After completing a project, clients can provide feedback and ratings for freelancers based on their performance and deliverables.
            </p>
          </div>
          <div className="workflow-item">
            <h3 className="text-lg font-bold mb-2">Building Reputation:</h3>
            <p className="text-base">
              Positive feedback and reviews help freelancers build their reputation and credibility on the platform, leading to more opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
