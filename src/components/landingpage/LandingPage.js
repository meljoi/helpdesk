import React from 'react';
import LogIn from '../../components/LogIn';
import HomePage from '../../components/homepage/HomePage';
import {
  withRouter
} from "react-router-dom";







const LandingPage= withRouter ((props, {history})=>{
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
// console.log(user,"hello")

  return(
    (user) ? (<HomePage handleLogOut={handleLogOut} />) :(
    <div  className="back-image">


    <div className="container" >

      <div className=" about">
        <div className="login order-last shadow ">


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
      history={history}

      />



        </div>
        <div className="summary">
          <h1 className="title">helpdesk</h1>
          <p className="type">Now that most of us are working from home, we could use a visual organizer to help with keeping us sane. <span style={{fontFamily: 'Vampiro One'}}>helpdesk</span> is a simple and easy desk organizer to help you with your everyday tasks. It’s unique background interface helps to have everything you need all in one place. </p>
        </div>
      </div>
    </div>


    </div>
)
  )
})

// {user ? (handleLogin={handleLogin}) :()}


export default LandingPage
