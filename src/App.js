import React from 'react';
import { useState } from 'react';
import './App.css';
import { Users } from './users';
import Table from './Table';


function App() {

const [ query, setQuery ] = useState("")

const Keys = ["first_name", "last_name", "email" ]

const search = (data) => {
  return data.filter((item) =>
         Keys.some(key=>item[key].toLowerCase().includes(query))
   );

};

  return(

    <div className='app'>
      <input type='text'
      placeholder='search...'
      className='search'
      onChange={(e) => setQuery(e.target.value)}/>

     <Table data={search(Users)}/>

    </div>

  )
}

export default App;

