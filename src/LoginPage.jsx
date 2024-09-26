import React from 'react';
import LoginForm from './LoginForm';
import loginImage from '/public/login-app.png'; 

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <img src={loginImage} alt="Login Illustration" className="w-3/4" />
      </div>
      
          <div className="w-1/2 flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
