import React from 'react';

const RememberMe = () => {
  return (
    <label className="inline-flex items-center">
      <input type="checkbox" className="form-checkbox text-blue-500" />
      <span className="ml-2 text-sm text-gray-600">Remember Me</span>
    </label>
  );
};

export default RememberMe;
