import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQdw7o8iLklKkQHt5WQ4W1c-3zVX9czG4",
  authDomain: "cart-5ad35.firebaseapp.com",
  projectId: "cart-5ad35",
  storageBucket: "cart-5ad35.appspot.com",
  messagingSenderId: "1067060160899",
  appId: "1:1067060160899:web:b8cb6684309a9102936eb6"
};

//initialize the firebase

firebaseConfig.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
