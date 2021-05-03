
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC56yyIAc9CrRsx34PI8YxTBhQFpnklEgs",
    authDomain: "kwitter-1ad8a.firebaseapp.com",
    databaseURL: "https://kwitter-1ad8a-default-rtdb.firebaseio.com",
    projectId: "kwitter-1ad8a",
    storageBucket: "kwitter-1ad8a.appspot.com",
    messagingSenderId: "420671870446",
    appId: "1:420671870446:web:5a369647e899bbb7a7aaff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
      });
  }