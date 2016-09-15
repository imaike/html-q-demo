// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRo-tdOk_wXBEM4Ur4bwEel3qrNpniBWQ",
    authDomain: "html-q-demo.firebaseapp.com",
    databaseURL: "https://html-q-demo.firebaseio.com",
    storageBucket: "html-q-demo.appspot.com",
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();