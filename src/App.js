import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { useState, useEffect, useRef } from 'react';
import Navigator from "./component/Navigator";
import Tag from "./component/Tag";




function App() {
  
  const [curState,setCurr] = useState()

 const navres = ()=>{
    const tags = [...document.getElementsByClassName("tooltip")]
    const title = [...document.querySelectorAll("section")].sort((a,b)=>{
       return  Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
    })
    const circles = [...document.getElementsByClassName("round-circle")]
      circles.forEach(c=>{
        c.classList.contains(title[0].id)?c.classList.add("active-class"): c.classList.remove("active-class")
      })
      tags.forEach(b=>{
        b.classList.contains(title[0].id)? b.classList.add("nav-active"): b.classList.remove("nav-active")
      })
      setCurr(title[0].id)
 }            


 useEffect(()=>{
  navres()
  const app = document.getElementById("app")
  app.addEventListener("scroll",navres)

 })
  return (
    <div id="app" className="w-full h-screen scroll-smooth transition-all overflow-x-hidden overflow-scroll">
      <Navigator curr={curState}/>
      <Homepage />
      <About />
    </div>
  );
}


export default App;
