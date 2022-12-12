import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Facebook } from "../icons/Icons";
import Navigator from "../component/Navigator";
import Piechart from "../component/Piechart";
import { UserData } from "../Data";

const About = () => {


  return (
    <section
      id="about"
      className="about-circle h-full overflow-hidden bg-[#020202] "
    >
      <div className="flex relative w-full overflow-hidden">
        <div className="absolute  md:w-[350px] md:h-[350px] h-[200px] w-[200px] rounded-[50%]  left-[50px] top-[-50px] bg-yellow-400/20 filter animate-blob blur-[600px] z-10"></div>
        <div className="w-4/5 lg:flex hidden relative">
          <div className="absolute z-10 bottom-[100px] left-[150px]  w-[500px] flex flex-col justify-between items-center">
            <h1 className="text-white text-[50px] ">Damilola Jibowu</h1>
            <div className="text-[#625C5C] flex justify-around w-[300px] h-auto">
              <Twitter />
              <Facebook />
              <Linkedin />
              <Github />
            </div>
          </div>
          <img
            src="./assets/about.jpg"
            alt="mypics"
            className="object-cover w-[1350px] h-[860px] animate-drop2 relative z-200"
          />
        </div>
        <div className="w-2/3 flex flex-col text-white pr-10 relative">
          <h1 className="self-end text-[4.80rem] text-yellow-400">Discover</h1>
          <div className="">
            <h1 className="md:text-4xl mb-5">About me</h1>
            <p className="w-[570px] text-[#625C5C]">
              My name is Damilola Jibowu, i’m a front end developer based in
              Lagos, Nigeria.
              <br /> A passionate frontend developer dedicated to building
              aesthetic yet user friendly webpages with the best technology out
              there in the tech world.
            </p>
          </div>
          <hr className="w-[570px] border-dashed mt-5 mb-10 border-[#625C5C]" />
          <div className="relative z-10">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
