import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

  let name = prompt("Please enter your User Name", "Anonymous");

  let userObject = {userName: name};

  let postUser = (obj) => {
    fetch('http://127.0.0.1:3000/users', {
      method: 'POST', 
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', 
      // credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(obj) // body data type must m
    })
    // .then( res => res.json())
    .then( (string) => {
      console.log(string);
    })  
    .catch((err) => {
      console.log(err);
    })
  };
  // postUser(userObject);
  ReactDOM.render(<App/>, document.getElementById('root'));


