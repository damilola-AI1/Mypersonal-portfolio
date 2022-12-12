import React from "react";
import { useState, useEffect } from 'react';
import "../App.css";
import Tag from "./Tag";
const Navigator = ({curr}) => {
  useEffect(()=>{
    const tooltip = [...document.getElementsByClassName("tooltip")]
    tooltip.forEach(c=>{
      c.classList.contains(curr)? c.classList.add("nav-active"):c.classList.remove("nav-active");
    })
  })
  return (
    <div id="side-nav">
    <div  className="fixed lg:flex hidden  items-center left-[30px] text-[#625C5C] flex-col top-[190px] h-[400px] w-[50px] z-10 justify-center">
        <hr className="border border-[#625C5C] h-10 border-dashed"/>
        <div className="side-nav relative">
          <a href="#home"  className=" relative round-circle flex-shrink-0  home transition-all  w-5 h-5  border rounded-full border-[#625C5C] items-center flex justify-center  py-auto">
            <p  className="p-0 m-0 left-[42px] bg-black w-0 overflow-hidden home tooltip text-white text-tool-tip absolute">Home</p>
          </a>
        </div> 
        <hr className="border border-dashed border-[#625C5C] h-10"/>
        <div className="side-nav relative">
          <a href="#about" className="round-circle relative about flex-shrink-0  w-5 h-5 border rounded-full border-[#625C5C] items-center flex justify-center py-auto">
            <p className="p-0 m-0 left-[42px] bg-black w-0 transition-all overflow-hidden about tooltip text-white text-tool-tip absolute">About</p>
          </a>
        </div>
        <hr className="border border-dashed border-[#625C5C] h-10"/>
        <div className="side-nav relative">
          <a href="#service" className="round-circle relative service  flex-shrink-0 w-5 h-5 border rounded-full border-[#625C5C] items-center flex justify-center py-auto">
            <p className="p-0 m-0 left-[42px] bg-black hidden services tooltip text-white text-tool-tip absolute">Service</p>
          </a>
        </div>
        <hr className="border border-dashed border-[#625C5C] h-10"/>
        <div className="side-nav relative">
          <a href="#client" className="round-circle client flex-shrink-0 w-5 h-5   border rounded-full border-[#625C5C] items-center flex justify-center py-auto"></a>
        </div>
        <hr className="border border-dashed border-[#625C5C] h-10"/>
        <a href="#portfolio" className="round-circle portfolio  flex-shrink-0  w-5 h-5 border rounded-full border-[#625C5C] items-center flex justify-center py-auto"></a> <hr className="border border-dashed border-[#625C5C] h-10"/>
    </div>
    </div>
  );
};

export default Navigator;
