import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  // Data
  
  const usersData = [
    { id:1, name: 'Tania', username: 'floppydiskette' },
    { id:2, name: 'Craig', username: 'siliconeidolon' },
    { id:3, name: 'Ben', username: 'benisphere' },
  ]
  const initialFormState = { id: null, name: '', username: ''  }

  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser: user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  

  return (
    <div className="container">
     <h1>User Form</h1>
     <div className="flex-row">
      <div className="flex-large">
        {editing ? (
        <>
          <h2>Edit user</h2>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </>
    ) : (
        <>
          <h2>Add homie</h2>
          <AddUserForm addUser={addUser} />
        </>
    )}
      </div>
       <div className="flex-large">
        <h2>View homies</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser}  />
       </div>
     </div>
    </div>
  )
}

export default App 


