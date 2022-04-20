import React,{ useEffect } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import CursorFollower from "../components/cursorFollower";
import Contact from "./contact";
import {motion} from 'framer-motion';
// import ThreeCanvas from "../components/threeCanvas";


import { CDN } from '../config';



function Home() {

    function refreshPage() {
        ScrollTrigger.refresh(true)
    }
    
    useEffect( () => {

        if(document.getElementById("go-down")){
            document.getElementById("go-down").addEventListener("click",() =>{
                window.scrollTo({
                    top: 500,
                    behavior: 'smooth'
                });   
        })}

        const talk = document.querySelector(".talk");

        if(talk){
        talk.addEventListener("click", function(){
            document.querySelector(".contact-pager").scrollIntoView();
        });}
    

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(MotionPathPlugin);
        // gsap.from(".text-trans", {duration:5, opacity:0, y:150, height:0})
        gsap.from(".main-header span", {duration:0.8, opacity:0, stagger:0.2, y:"80%",ease: "back.out(1.7)"})
        gsap.from(".para", {duration:0.5, delay:0.8, opacity:0, y:20})
        gsap.from(".job", { duration: 0.8, delay:1.3, opacity:0, y:80, ease: "bounce.out"})
        gsap.from(".talk", { duration: 0.8, delay:1.3, opacity:0, y:80, ease: "bounce.out"})

        gsap.to( ".go-down",{ 
            scrollTrigger:{
                trigger:".p-2",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:0})

        gsap.to( ".p-1",{ 
            scrollTrigger:{
                trigger:".p-1",
                start:"top 80%",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:1,y:0,scale:1 })

        gsap.to( ".p-2",{ 
            scrollTrigger:{
                trigger:".p-1",
                start:"50% 80%",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:1,y:0,scale:1 })
    
        gsap.to( ".p-3",{ 
            scrollTrigger:{
                trigger:".p-2",
                start:"50% 60%",
                toggleActions:"play none none reset"
        },duration:0.2, opacity:1,y:0,scale:1 })

        if(window.screen.width > 1024){
            gsap.to( ".contact-pager",{ 
                scrollTrigger:{
                    trigger:".contact-pager",
                    start:"top 10%",
                    toggleActions:"play none none reset"
            },duration:0.5, opacity:1, pointerEvents:"all"})
        }else{
            gsap.to( ".contact-pager",{ 
                scrollTrigger:{
                    trigger:".contact-pager",
                    start:"top 50%",
                    toggleActions:"play none none reset"
            },duration:0.5, opacity:1, pointerEvents:"all"})
        }

        
        // ScrollTrigger.create({
        //     trigger:".p-3",
        //     start:"20% top",
        //     onEnter:() => gsap.to("body", {backgroundColor:"#122d34", overwrite:'auto'}),
        //     onLeaveBack:() => gsap.to("body", {backgroundColor:"#f8feff", overwrite:'auto'}),
        // })
        
        const project1 = document.querySelector(".p-1");
        project1.addEventListener("click", function(){
            ScrollTrigger.update(true);
            console.log("refreshed")
        })

    },[])

   
    return (
        <div><CursorFollower/>

        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0,  translateY:"50px"}}
        transition={{ duration: 1.5 }}
        exit={{opacity:0,  translateY:"50px"}}>
                
        <div className="homeC">
            
            <div className="center">

                {/* <ThreeCanvas/> */}


                <h1 className="main-header">
                    <span>Hello, </span>
                    <span>I'm </span>
                    <span>Sarath </span>
                    <span>Chand!</span>
                </h1>
            
                <p style={{color:"#122d34"}} className="para">I am Passionate about
                    <div className="cube-container">
                        <div className="cube">
                            <span className="front-name"> UX Design</span>
                            <span className="top-name"> UX Design</span>
                            <span className="back-name"> UI Design</span>
                            <span className="bottom-name"> UI Design</span>
                        </div>
                    </div>
                </p>
                <p className="job" style={{fontSize:"1rem", textAlign:"center"}} >Currently Working as UI/UX Designer at MapOut.  </p>
                <span className="talk" style={{paddingTop:"1rem", fontWeight:"bold"}} >Got a project?</span>
                    
            </div>

            <div id="go-down" className="go-down">
                <img src={`${CDN}/icons/down.svg`} alt="" /> 
            </div>

            <div className="works" onClick={refreshPage}>
                <div className="project p-1">
                    <Link style={{cursor:"none"}} to="/covac">
                        <img className="project-image first-p" src={`${CDN}/images/images/covac-thumbnail.png`} alt="" />
                    </Link>
                </div>
                
                <div className="project p-2" onClick={refreshPage}>
                    <Link style={{cursor:"none"}} to="/rogalik-bakery">
                        <img className="project-image second-p" src={`${CDN}/images/images/rogalik-thumbnail.png`} alt="" />
                    </Link>
                </div>

                <div className="project p-3" onClick={refreshPage}>
                    <Link style={{cursor:"none"}} to="/mia-restaurant">
                        <img className="project-image third-p" src={`${CDN}/images/images/mia-thumbnail.png`} alt="" />
                    </Link>
                </div>

            </div>

            <div className="stack-container">
                <h3 className="stackH3">Designed & developed by me with <span style={{color:"red"}}>&#10084;</span> and</h3>
                <div className="stack-stuff">
                    <div className="stack-icons">
                        <img className="reactpng" src={`${CDN}/icons/react.png`} alt="" />
                        <img className="jspng" src={`${CDN}/icons/hs.png`} alt="" />
                        <img className="gsappng" src={`${CDN}/icons/gsap.png`} alt="" />
                        <img className="blenderpng" src={`${CDN}/icons/blender.png`} alt="" />
                        <img className="pspng" src={`${CDN}/icons/photoshop.png`} alt="" />
                        <img className="aipng" src={`${CDN}/icons/ai.png`} alt="" />
                        <div className="hours">
                            150+
                            <div className="hover-hours">hours of coding</div>
                        </div>
                        <div className="thinking">
                            400+
                            <div className="hover-thinking">hours of thinking</div>
                        </div>
                        <div className="insp">
                            2.61
                            <div className="hover-insp">MB size</div>
                        </div>
                        <div className="lines">
                            5560
                            <div className="hover-lines">number of lines</div>
                        </div>
                        <div className="files">
                            130
                            <div className="hover-files">number of files</div>
                        </div>
                    </div>
                    
                </div>
                <div className="breathe">
                    <img className="oBgo" src={`${CDN}/icons/outeryellow.svg`} alt="" />
                    <img className="mBgo" src={`${CDN}/icons/outeryellow.svg`} alt="" />
                    <img className="iBgo" src={`${CDN}/icons/outeryellow.svg`} alt="" />
                    <img className="oBg" src={`${CDN}/icons/outerbg.svg`} alt="" />
                    <img className="mBg" src={`${CDN}/icons/outerbg.svg`} alt="" />
                    <img className="iBg" src={`${CDN}/icons/outerbg.svg`} alt="" />
                </div>
                
            </div>

            <div className="updates-page">
                <div className="update-page">
                    <h1 style={{fontSize:"2rem"}}>My Website is Never Done</h1>
                    <h3>So, check it out occassionally</h3>
                    <p>What's new</p>
                    <ul>
                        <li> <Link className="link-style" to="/about"> [Hover effect in About me] </Link> </li>
                        <li> <Link className="link-style" to="/404"> [Added 404 page, designed in blender] </Link></li>
                        <li> <Link className="link-style" to="/contact"> [Animation after sending message] </Link></li>
                        <li> [This page :P] </li>
                    </ul>
                </div>
            </div>

            

            <div className="footer">
                <a href="https://twitter.com/nsarathsunny" target = "_blank" rel="noreferrer"  className="s-i "> <p>Twitter</p> <span className="bordert"></span></a >
                <a href="https://www.behance.net/sarathchand" target = "_blank" rel="noreferrer"  className="s-i "> <p>Behance</p> <span className="borderb"></span></a >
                <a href="https://www.linkedin.com/in/sarathchand/" target = "_blank" rel="noreferrer"  className="s-i "> <p>LinkedIn</p> <span className="borderl"></span></a >
                <a href="https://www.instagram.com/sarath_chand_19/" target = "_blank" rel="noreferrer"  className="s-i "> <p>Instagram</p> <span className="borderi"></span></a >
                <a href="mailto:sarathchand19@gmail.com" target = "_blank" rel="noreferrer"  className="s-i "> <p> Mail</p> <span className="borderm"></span></a >       
            </div>

<div className="contact-pager">
    <Contact/>
</div>

            
            
               
        </div>
        </motion.div> 
        </div>
        
        
     );
}

export default Home;