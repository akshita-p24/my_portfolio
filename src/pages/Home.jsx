import { useState } from "react";

function Home() {
    const [count,setCount]= useState(0);
    return (
        <div>
            <h1>Welcome</h1>
            <p>This is my portfolio website</p>
            <p> Hi! I’m Akshita, a passionate web developer with interest in building
                interactive and responsive applications. I enjoy learning new
                technologies and improving my coding skills every day.
            </p>
            <button onClick={()=>
                setCount(count+1)}> Clicked {count} times </button>
        </div>
    );
}
export default Home;