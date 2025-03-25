import React from 'react';
import './App.css'
import TeamMemberCard from './components/TeamMemberCard';


function App (){
  return(
    <div>
      <h1>Team Members</h1>

      <TeamMemberCard
        name = "John"
        job = "Software Engineer"
      />
      <TeamMemberCard
        name = "Steve"
        job = "Backend Engineer"
      />

    </div>
  )
}

export default App;