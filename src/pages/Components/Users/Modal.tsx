import React from 'react';
import { UserTabel } from '../../../types/user';

// Define the types for the props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserTabel
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96 space-y-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">User Details</h2>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Created At:</strong> {new Date(user.createdAt).toLocaleDateString('en-GB').replace(/\//g, '-')}
          </p>
        </div>

        {/* Close Button at the bottom */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
