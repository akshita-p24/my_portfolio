import {useEffect,useState} from "react";

function Skills() {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);
    return(
    <div className="skills-wrapper">
      <div className="skills-card">
        <h1>Skills</h1>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Problem Solving</li>
        </ul>

        <h2>Users from API:</h2>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
    );
}
export default Skills;