import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVVIgi_1Gxr3ZPerNZIHnzzQmdZZasNbI",
  authDomain: "githup-7dab6.firebaseapp.com",
  projectId: "githup-7dab6",
  storageBucket: "githup-7dab6.appspot.com",
  messagingSenderId: "626531340588",
  appId: "1:626531340588:web:2b7a06bed661eb8bf55c89"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user = collection(db, 'emails');
const user19 = collection(db, 'address');
const user34 = collection(db, 'address-emails');


// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  const addComent = document.querySelector(".form");
  const addEmail = document.querySelector(".formEmail");

  // Check if elements exist before adding event listeners
  if (addComent) {
    addComent.addEventListener("submit", (e) => {
      e.preventDefault();
      addDoc(user19, {
        name: addComent.name.value,
        email: addComent.email.value,
        Message: addComent.Message.value,
      }).then(() => addComent.reset());
    });
  }

  if (addEmail) {
    addEmail.addEventListener("submit", (e) => {
      e.preventDefault();
      addDoc(user34, {
        email2: addEmail.Aemail.value,
      }).then(() => addEmail.reset());
    });
  }
});
