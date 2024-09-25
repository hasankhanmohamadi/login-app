import React from 'react';

const InputField = ({ label, type }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2">{label}</label>
      <input
        type={type}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default InputField;
