import React from 'react';

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
