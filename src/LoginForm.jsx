import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import RememberMe from './RememberMe';
import ForgotPasswordLink from './ForgotPasswordLink';
import SignUpLink from './SignUpLink';

import appStoreImage from '/public/app-store-button.png';
import googlePlayImage from '/public/google-play-button.png';

const LoginForm = () => {
  return (
    <div className="w-3/4">
      <h2 className="text-3xl font-semibold mb-6">Hello, Welcome Back</h2>
      
      <form>
        <InputField label="Username Or Email" type="text" />

        <InputField label="Password" type="password" />

        <div className="flex justify-between items-center mb-4">
          <RememberMe />
          <ForgotPasswordLink />
        </div>

        <SubmitButton label="Login" />

        <SignUpLink />

        <div className="flex justify-center mt-6">
          <img src={appStoreImage} alt="App Store" className="w-40 mx-2" />
          <img src={googlePlayImage} alt="Google Play" className="w-40 mx-2" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
