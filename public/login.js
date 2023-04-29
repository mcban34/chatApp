const firebaseConfig = {
    apiKey: "AIzaSyDfd7bKb0Py97_URlo7uBXteJASacxuVRY",
    authDomain: "chatapp-f4e9e.firebaseapp.com",
    databaseURL: "https://chatapp-f4e9e-default-rtdb.firebaseio.com/",
    projectId: "chatapp-f4e9e",
    storageBucket: "chatapp-f4e9e.appspot.com",
    messagingSenderId: "388787646429",
    appId: "1:388787646429:web:70d484c54b99720a1f1034"
};
firebase.initializeApp(firebaseConfig);

document.querySelector(".girisYap").addEventListener("click", function () {
    let email = document.getElementById("email").value
    let sifre = document.getElementById("sifre").value
    firebase.auth().signInWithEmailAndPassword(email, sifre)
        .then(function () {
            sessionStorage.setItem('userEmail', email);
            window.location.href = "http://localhost:5000/"
        })
        .catch(function (error) {
            console.log(error.message)
    })
})