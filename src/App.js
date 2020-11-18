import React,{ useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Flow from './Flow';
import Footer from './Footer';
import fire from './components/fire';





const App = (props) =>{
  const [user, setUser]= useState();
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [emailError, setEmailError]=useState('')
  const [passwordError, setPasswordError]=useState('');
  const [hasAccount, setHasAccount]=useState('false');



  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const clearErrors = () =>{
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = ()=>{
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err =>{
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setEmailError(err.message);
              break;

        }
      });

  };
  const handleSignUp = ()=>{
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err =>{
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setEmailError(err.message);
              break;
}
  }
)
}
  const handleLogOut = () =>{
    fire
      .auth()
      .signOut();
  };


  const authListener = () =>{
    fire.auth().onAuthStateChanged((user)=> {
      if (user) {
        clearInputs();
        setUser(user);
      }else{
        setUser(undefined);
      }
    })
  };

  useEffect(()=>{
    authListener();
  },[])



// console.log(user,"happy")

  return (

    <>
    <div  className="main">
    <Navbar className="nav-color">

      <h5><a className="title" href="#home">helpdesk</a></h5>

      <Navbar.Toggle />

{ user ?
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="offset-md-10 type">
        Welcome: <a href="#login" onClick={handleLogOut}>{user.email}</a>
      </Navbar.Text>
        <Navbar.Text className='type'></Navbar.Text>
      </Navbar.Collapse>
      : ""}
    </Navbar>

      <Flow
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

      <Footer />
  </div>
  </>
  )
}

export default App;
