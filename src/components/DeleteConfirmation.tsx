"use client";

import React from "react";

type DeleteConfirmationProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        open ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-semibold">Confirm Delete</h2>
        <p className="text-sm text-gray-600 mt-2 mb-4">
          Are you sure you want to delete this service? This action cannot be
          undone.
        </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
