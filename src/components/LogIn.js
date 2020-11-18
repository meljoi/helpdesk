import React from 'react';
import { Form } from 'react-bootstrap';




const LogIn = (props) =>{
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

// console.log("test",props)
  return (

<div>
  <Form>
    <h4 className="type text-center">hello</h4>
    <Form.Group controlId="formGroupEmail" className="d-flex">
      <Form.Label className="type login-label">Email address</Form.Label>
      <Form.Control type="email" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="formGroupPassword" className="d-flex">
      <Form.Label className="type login-label">Password</Form.Label>
      <Form.Control type="password" required value ={password} onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <p>{passwordError}</p>
  </Form>

  <div>
    {hasAccount ? (
      <div className="login-button">

        <button className=" type"  onClick={handleLogin}>
          login
        </button>
          <p className="type login-padding">register here <span onClick={()=>setHasAccount(!hasAccount)}><a href="#">sign up</a></span></p>

    </div>
):(
    <div className="login-button">
      <button className=" type" onClick={handleSignUp}>
        sign up
      </button>
        <p className="type login-padding">have an account? <span onClick={()=>setHasAccount(!hasAccount)}><a href="#">login</a></span></p>

    </div>
  )}



  </div>
</div>
  )
}

export default LogIn;
