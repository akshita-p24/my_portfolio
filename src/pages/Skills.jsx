import {useEffect,useState} from "react";

function Skills() {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);
    return(
        <div>
            <h1>Skills</h1>
            <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
             </ul>
             <h2>Users from API::</h2>
             {users.map(user=>(
                <p key={user.id}> {user.name} </p>
             ))}
        </div>
    );
}
export default Skills;