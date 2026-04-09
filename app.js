import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkpJy4BgmbmnXdd16WboAwW3S7FOIOkrE",
  authDomain: "midnightcalculator.firebaseapp.com",
  projectId: "midnightcalculator",
  storageBucket: "midnightcalculator.firebasestorage.app",
  messagingSenderId: "830378489730",
  appId: "1:830378489730:web:37d467494b5fa727c5019b",
  measurementId: "G-80N7ECDVCR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let prices = {};

async function loadPrices() {
  const docRef = doc(db, "prices", "cars");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    prices = docSnap.data();
  }
}

function calculate() {
  const car = document.getElementById("car").value;
  const qty = document.getElementById("quantity").value;

  const total = prices[car] * qty;

  document.getElementById("result").innerText =
    "Total: $" + total;
}

loadPrices();