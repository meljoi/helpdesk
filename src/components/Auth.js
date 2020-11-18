import React from 'react';
import LogIn from './LogIn';






const Auth = (props,{history})=> {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,

  } = props;

  return (
    <div>

    <LogIn
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    handleLogin={handleLogin}
    handleSignUp={handleSignUp}
    hasAccount={hasAccount}
    setHasAccount={setHasAccount}
    emailError={emailError}
    passwordError={passwordError}

    />
    </div>

  );
}

export default Auth;
