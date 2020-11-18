import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import HomePage from './components/homepage/HomePage'





export default function flow(props){
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
    user,
    handleLogOut


  } = props;
  return (

<Router>
  <div>
  <Switch>
    <Route exact path="/">
      <LandingPage

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
      user={user}
      handleLogOut={handleLogOut}
      />
    </Route>
      // <Route exact path="/">
      //   <HomePage />
      // </Route>
  </Switch>
  </div>
</Router>
)

}
