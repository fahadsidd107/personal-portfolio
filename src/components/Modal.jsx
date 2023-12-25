import React from 'react';
import { Github,Linkedin,Twitter,Phone,Mail } from 'lucide-react';

const Modal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
      <div className="border-4 border-purple-600 bg-tertiary rounded-lg p-8 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Explore More Projects on GitHub!</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-white mb-4">
          Welcome! While this portfolio showcases some of my completed projects, not all of them are currently uploaded here. You can find a comprehensive list of my works, including those in progress, on my GitHub profile.
        </p>
        <p className="text-white mb-4">
          Feel free to explore my GitHub repositories for a wider view of my projects and their code. Click the button below to visit my GitHub profile and discover more!
        </p>
        <button
          onClick={() => window.open('https://github.com/fahadsidd107', '_blank')}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none flex items-center justify-center gap-3 hover:bg-github"
        >
        <Github/>  Visit GitHub Profile
        </button>
      </div>
    </div>
  );
};

export default Modal;
