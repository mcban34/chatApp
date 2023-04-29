const firebaseConfig = {
  apiKey: "AIzaSyDfd7bKb0Py97_URlo7uBXteJASacxuVRY",
  authDomain: "chatapp-f4e9e.firebaseapp.com",
  databaseURL:"https://chatapp-f4e9e-default-rtdb.firebaseio.com/",
  projectId: "chatapp-f4e9e",
  storageBucket: "chatapp-f4e9e.appspot.com",
  messagingSenderId: "388787646429",
  appId: "1:388787646429:web:70d484c54b99720a1f1034"
};
firebase.initializeApp(firebaseConfig);


const database = firebase.database();
const messageRef = database.ref('messages');

const socket = io.connect('http://localhost:5000/');

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

const userEmail = sessionStorage.getItem('userEmail');
console.log(userEmail);

submitBtn.addEventListener('click', () => {
  const messageData = {
    sender: userEmail,
    message: message.value,
  };
  messageRef.push(messageData)
    .then(() => {
      console.log('Mesaj başarıyla kaydedildi');
    })
    .catch((error) => {
      console.log('Hata:', error);
    });
});

messageRef.on('child_added', snapshot => {
  const data = snapshot.val();
  if (data.sender === userEmail) {
    output.innerHTML += `<p class="test mine"><strong> ${data.sender} </strong> ${data.message} </p>`
  } else {
    output.innerHTML += `<p class="test theirs"><strong> ${data.sender} </strong> ${data.message} </p>`
  }
})