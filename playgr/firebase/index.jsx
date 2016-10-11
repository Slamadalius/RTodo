import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDQpfcmYI3Ld8L9HJs74wWIL76ZF3dRw5Q",
    authDomain: "todoapp-b99f0.firebaseapp.com",
    databaseURL: "https://todoapp-b99f0.firebaseio.com",
    storageBucket: "todoapp-b99f0.appspot.com",
    messagingSenderId: "620202301648"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'TodoApp',
    version: '1.0'
  },
  isRunning: true,
  user: {
    age: 22,
    name: 'Dalius'
  }
}).then(()=>{
  console.log('Set worked!');
}, (e)=>{
  console.log('Set failed');
});

firebaseRef.on('value', (snapshot)=>{
  console.log('Got value', snapshot.val());
});

firebaseRef.update({isRunning: false});
