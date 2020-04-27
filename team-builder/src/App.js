import React, { useState } from 'react';
import './App.css';
import Form from './form';
import Members from './Member';

function App() {
  const [members,setMembers] = useState([])

  const addMember = member => {
    setMembers([...members,member])
    console.log(members)
  } 

  return (
    <div>
      <Form addMember={addMember}/>
      <section className="memberCard">
        <h1>Your Team:</h1>
        <Members members={members}/> 
      </section>
      
    </div>
  );
}

export default App;
