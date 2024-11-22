const firebaseConfig = {
    apiKey: "AIzaSyATZXYdhCV-eDiNNjbj0vLJAhr_h6DH_28",
    authDomain: "bodeguita-5b3f0.firebaseapp.com",
    databaseURL: "https://bodeguita-5b3f0-default-rtdb.firebaseio.com",
    projectId: "bodeguita-5b3f0",
    storageBucket: "bodeguita-5b3f0.firebasestorage.app",
    messagingSenderId: "204850777181",
    appId: "1:204850777181:web:93012f7a75bcd296ef91b4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const productsDOM = document.querySelector('#products')

db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        const data = doc.data()
        productsDOM.innerHTML += `
            <li>
                <img src="${data.image}" alt="Cerveza Pilsen">
                <div>
                    <p>Precio: S/ ${data.price.toFixed(2)}</p>
                    <p>${data.name}</p>
                </div>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
            </li>
        `
    });
});;