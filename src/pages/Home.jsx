import { useState } from "react";

function Home() {
    const [count,setCount]= useState(0);
    return (
        <section className="home">
            <h1>Welcome. Hi, I am Akshita</h1>
            <p className="subtitle">Frontend developer | React Enthusiast</p>
            <p> I’m a passionate web developer with interest in building
                interactive and responsive applications. I enjoy learning new
                technologies and improving my coding skills every day.
            </p>
            <button className="home-button" onClick={() =>
                setCount(count+1)}> Clicked {count} times </button>
        </section>
    );
}
export default Home;