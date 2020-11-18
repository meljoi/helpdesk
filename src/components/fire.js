import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyACXAhfSklma8ypePvMcLthsct3_CSAvmU",
    authDomain: "helpdesk-20.firebaseapp.com",
    databaseURL: "https://helpdesk-20.firebaseio.com",
    projectId: "helpdesk-20",
    storageBucket: "helpdesk-20.appspot.com",
    messagingSenderId: "1038647255405",
    appId: "1:1038647255405:web:42cb98eb0ac55854c8ba64",
    measurementId: "G-TXFSNLLRPN"
  };

  const fire=firebase.initializeApp(firebaseConfig);


  export default fire
