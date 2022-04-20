import React,{useEffect} from "react";
import CursorFollower from '../components/cursorFollower';
import {motion} from 'framer-motion';
import VanillaTilt from "vanilla-tilt";

import { CDN } from '../config';


function About() {

    useEffect(()=>{ 
        const element = document.querySelector(".my-image");
        VanillaTilt.init(element);
        // element.addEventListener("tiltChange", callback);
    })

    return (
        <div> <CursorFollower/>

        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0, translateY:"50px"}}
        transition={{ duration: 1.5 }}
        exit={{opacity:0, translateY:"50px"}}
         className="about-container">
            
            <div className="about-text">
                <h1 style={{filter:'grayscale(1)'}} >Nice to Meet you!👋</h1>
                <p style={{marginTop:"2rem"}}>Hello, I am Sarath Chand, graduated and specialized in Electronics.</p>
                <p>At college, I always enjoyed using Photoshop and designing stuff. In my 3rd and 4th year's, I became the Design Team Head of VASHISHT, our college technical fest. During then, I got to learn how to manage a team.</p>
                <p>Later in 4th year, I got an opportunity to design an Interface for our unofficial college app. It was challenging. Then I decided to take it up as a career. Later, I took a UX Course developed by Google, including three hands-on projects. It helped me gain a lot of knowledge on UX Design.</p>
                <p>When I'm not designing, you can find me practising photography, playing Pubg, listening to music, or watching another Netflix Series.</p>
            </div>

            <div className="my-image-c">
                <div data-tilt className="my-image">
                    <img className="my-imaged" src={`${CDN}/images/images/scimg_back.jpg`} alt="My_image" />
                    <img className="my-imaged-back" src={`${CDN}/images/images/scimg_front.png`} alt="My_image" />
                </div>
            </div>
            
        </motion.div>

        </div> 
       
     );
}

export default About
