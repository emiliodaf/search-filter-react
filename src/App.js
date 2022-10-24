import React from 'react';
import { useState } from 'react';
import './App.css';
import { Users } from './users';


function App() {

const [ query, setQuery ] = useState("")

  return(

    <div className='app'>
      <input type='text'
      placeholder='search...'
      className='search'
      onChange={(e) => setQuery(e.target.value)}/>

      <ul className='list'>
    {Users.filter(user=>user.first_name.toLowerCase().includes(query)
        ).map((user) => (
        <li key={user.id} className='listItem'>
        {user.first_name}
        </li>
    ))}
     
      </ul>
    </div>

  )
}

export default App;

