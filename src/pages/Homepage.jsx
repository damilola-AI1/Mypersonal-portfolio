import React from "react";
import { Github, Linkedin, Twitter, Facebook } from "../icons/Icons";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Piechart from "../component/Piechart";
import {Link} from 'react-scroll'
import Navigator from "../component/Navigator";

const Homepage = () => {

return (
    <section id="home" className="home-circle bg-[#020202] w-full h-screen relative overflow-hidden">
      <div className="absolute hidden lg:flex lg:w-[350px] lg:h-[350px] h-[200px] w-[200px] rounded-[50%]  right-[50px] top-[70px] bg-yellow-400/10 filter animate-blob blur-[600px] z-10"></div>
      <div className="absolute hidden lg:flex lg:w-[150px] lg:h-[150px] h-[100px] w-[100px] rounded-[50%]  bottom-[50px] lg:left-[500px] bg-yellow-400/30 animate-blob filter blur-[300px]"></div>
      <div className="max-w-[1200px] w-[80%] h-full mx-auto flex-col">
        <nav className="w-[100%] h-[40px] lg:h-[60px] px-5 flex relative items-center justify-between border-dashed text-sm md:text-lg border-t-0 border-[#443F3F]  border-[1px] rounded-b-3xl ">
          <h2 className="text-md text-white font-black">Damilola</h2>
          <ul className="w-[400px]  md:flex justify-between hidden">
            <li className="cursor-pointer hover:bg-yellow-400 transition-all duration-300 hover:text-black font-semibold  w-[70px] text-sm py-1 rounded-lg text-center text-white">
              Home
            </li>
            <li className=" cursor-pointer hover:bg-yellow-400 transition-all duration-300 hover:text-black font-semibold  w-[70px] text-sm py-1 rounded-lg text-center text-white">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:bg-yellow-400 transition-all duration-300 hover:text-black font-semibold  w-[70px] text-sm py-1 rounded-lg text-center text-white">
              Services
            </li>
            <li className="cursor-pointer hover:bg-yellow-400 transition-all duration-300 hover:text-black font-semibold  w-[70px] text-sm py-1 rounded-lg text-center text-white">
              Client
            </li>
            <li className="cursor-pointer bg-yellow-400 font-semibold hover:border hover:bg-transparent hover:text-yellow-300 w-[70px] text-sm py-1 border-[#443F3F] rounded-lg text-center text-black">
              Hire Me
            </li>
          </ul>
        </nav>
        <div className="w-full h-[715px] grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col justify-center md:m-0 my-10 md:items-start items-center lg:items-start">
            <div className="text-white text-start md:text-start font-sfr font-bold text-4xl md:block hidden md:text-5xl lg:text-6xl mb-5 s md:mb-10">
              {" "}
              <h1 className="text-yellow-400 text-[4.80rem]">Hello!</h1> I’m a
              Frontend Developer from Lagos <br />
              Nigeria
            </div>
            <h1 className="text-white md:hidden text-2xl font-sfr w-full text-center mt-20 mb-20">
              <h1 className="text-[45px] font-black text-yellow-400">Hello!</h1>
              i'm Damilola Jibowu,
              <br />
              FrontEnd developer based <br /> in Lagos
            </h1>
            <p className="md:block hidden text-[#625C5C] md:text-start text-center sm:w-[200px] lg:w-[400px] md:w-[300px] md:mb-10 mb-5">
              I ‘m Damilola, a professional web developer with interest in
              making your web experience wonderful
            </p>
            <p className="cursor-pointer bg-yellow-400  hover:text-yellow-400 transition ease-in duration-90  font-bold  w-[130px] md:w-[200px] md:h-[50px] h-[40px] hover:border flex justify-center items-center rounded-xl text-sm md:text-md hover:bg-transparent   border-yellow-400">
              My Portfolio
            </p>
          </div>
          <div className="flex items-center lg:h-screen ">
            <img
              src="./assets/hero.jpg"
              alt=""
              className="animate-drop relative z-200 justify-start object-cover md:w-auto  self-center"
            />
            <div className="relative bottom-[25px] z-10 text-white hidden md:flex flex-col justify-around w-[50px] h-[350px] ml-auto self-center ">
              <div className="animate-bounce" >
                <Twitter />
              </div>
              <div className="animate-bounce" >
                <Facebook/>
              </div>
              <div className="animate-bounce" >
                <Linkedin />
              </div>
              <div className="animate-bounce" >
                <Github/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
