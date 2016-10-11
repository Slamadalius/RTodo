import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDQpfcmYI3Ld8L9HJs74wWIL76ZF3dRw5Q",
      authDomain: "todoapp-b99f0.firebaseapp.com",
      databaseURL: "https://todoapp-b99f0.firebaseio.com",
      storageBucket: "todoapp-b99f0.appspot.com",
      messagingSenderId: "620202301648"
    };
    firebase.initializeApp(config);

  
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
