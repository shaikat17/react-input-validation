import React, { useState } from 'react';

import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


function App() {
  const [userList, setUserList] = useState([])
  
  const addUserHandler = (user) => {
    setUserList( prevUsers => {
      return [...prevUsers, {name: user.userName, age: user.userAge, id: Math.random().toString()}]
    })
  }
  
  return (
    <div>
        <AddUsers onAddUser={addUserHandler}/>
        <UserList users={userList} />
    </div>
  );
}

export default App;
