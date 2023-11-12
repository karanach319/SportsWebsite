import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserList from './components/ProductList';

const usersData = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "bio": "Enthusiastic software engineer."
  },

  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "bio": "Passionate about design and user experience."
  },

  {
    "id": 3,
    "name": "Aidan Melvin",
    "email": "abc@123.com",
    "bio": "Hi I'm Aidan"
  }
];

ReactDOM.render(
  <UserList users={usersData}/>,
  document.getElementById('root')
);