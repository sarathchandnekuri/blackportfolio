import React,{useEffect} from 'react';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import emailjs from 'emailjs-com';
import {motion} from 'framer-motion';


import { CDN } from '../config';

function Contact(){

    useEffect(()=>{

        const nameInputC = document.querySelector(".nameInput");
        const emailInputC = document.querySelector(".emailInput");
        const messageInputC = document.querySelector(".messageInput");

        
        nameInputC.addEventListener("focus", function(){
            document.querySelector(".nb1").classList.add("borderLeft");
            document.querySelector(".nb2").classList.add("borderTop");
            document.querySelector(".nb3").classList.add("borderRight");
            document.querySelector(".nb4").classList.add("borderBottom");
            setTimeout(function(){
                document.querySelector(".nb1").classList.remove("borderLeft");
                document.querySelector(".nb2").classList.remove("borderTop");
                document.querySelector(".nb3").classList.remove("borderRight");
                document.querySelector(".nb4").classList.remove("borderBottom");
            },2500)
        });

        emailInputC.addEventListener("click", function(){
            document.querySelector(".eb1").classList.add("borderLeft");
            document.querySelector(".eb2").classList.add("borderTop");
            document.querySelector(".eb3").classList.add("borderRight");
            document.querySelector(".eb4").classList.add("borderBottom");
            setTimeout(function(){
                document.querySelector(".eb1").classList.remove("borderLeft");
                document.querySelector(".eb2").classList.remove("borderTop");
                document.querySelector(".eb3").classList.remove("borderRight");
                document.querySelector(".eb4").classList.remove("borderBottom");
            },2500)
        });
        
        messageInputC.addEventListener("click", function(){
            document.querySelector(".mb1").classList.add("borderLeftm");
            document.querySelector(".mb2").classList.add("borderTop");
            document.querySelector(".mb3").classList.add("borderRightm");
            document.querySelector(".mb4").classList.add("borderBottomm");
            setTimeout(function(){
                document.querySelector(".mb1").classList.remove("borderLeftm");
                document.querySelector(".mb2").classList.remove("borderTop");
                document.querySelector(".mb3").classList.remove("borderRightm");
                document.querySelector(".mb4").classList.remove("borderBottomm");
            },2500)
        });

    },[])
    
    gsap.registerPlugin(MotionPathPlugin);

    const flightPath = {
        curviness: 1,
        autoRotate:true,
        path: [ { x: -192, y: 182 },
                { x: -288, y: -108 },
                { x: -202, y: -72 },
                { x: -306, y: -80 },
                { x: -303, y: -238 },
                { x: 45, y: -380 }]
    };
    const flightPath2 = {
        curviness: 1,
        autoRotate:true,
        path: [ { x: -192, y: 182 },
                { x: -288, y: -108 },
                { x: -202, y: -72 },
                { x: -306, y: -80 },
                { x: -303, y: -238 },
                { x: 2, y: -380 }]
    };
    const flightPath3 = {
        curviness: 1,
        autoRotate:true,
        path: [ { x: -192, y: 182 },
                { x: -288, y: -108 },
                { x: -202, y: -72 },
                { x: -306, y: -80 },
                { x: -303, y: -238 },
                { x: -52, y: -380 }]
    };  

    function takeOff() {
        if(window.screen.width > 780){
            console.log("flighting")
            gsap.to(".flight", {duration:2, ease:"Power0.easeOut",
            motionPath:flightPath
            });
        }
        else if(window.screen.width > 420 && window.screen.width < 780 ){
            gsap.to(".flight", {duration:2, ease:"Power0.easeOut",
            motionPath:flightPath2
            });
        }
        else{
            gsap.to(".flight", {duration:2, ease:"Power0.easeOut",
            motionPath:flightPath3
            });
        }

        document.querySelector(".reply-container").classList.add("popMsg");
        document.querySelector(".incogImg").classList.add("goback");
        document.querySelector(".mypic").classList.add("gofront");
    };

    const sendMail = (e) =>{
        e.preventDefault();

        takeOff();
        emailjs.sendForm("service_7bcpzrp",
                        "template_3kxcwya",
                        e.target,
                        "user_MeCtNVfg97SBfzBuDAhQL"
                        ).then((res) =>{
                            console.log(res)
                        }).catch((err)=> console.log(err));
        setTimeout(function() {
            window.location.reload()
        }, 7000)
    }

    return(
        <div>
        
        <motion.div
        animate={{opacity:1,  translateY:"0px"}}
        initial={{opacity:0, translateY:"50px"}}
        transition={{ duration: 1.5 }}
        exit={{opacity:0, translateY:"50px"}}>
        <div className="contact-page">
            <div className="incog">
                <img className="incogImg" src={`${CDN}/icons/incog.svg`} alt="" />
                <img className="mypic" src={`${CDN}/icons/mypic.png`} alt="" />
                </div>
            <div className="reply-container">
                <p>I've got your mail</p>
            </div>
            <h2>You've gone incognito to Contact Me</h2>
            <div className="form">
                <form onSubmit={sendMail} >
                    <div className="input-container">
                        <input className="nameInput" minLength="2" type="text" name="name" id="name" placeholder="." required/>
                        <label className="nameLabel" htmlFor="name">Name*</label>
                        <span className="nb1"></span>
                        <span className="nb2"></span>
                        <span className="nb3"></span>
                        <span className="nb4"></span>
                        <small>Error Message</small>
                        
                    </div>
                    <div className="input-container">  
                        <input className="emailInput" type="email" name="email"  id="email" placeholder="." required/>
                        <label className="emailLabel" htmlFor="email" >Email*</label>
                        <span className="eb1"></span>
                        <span className="eb2"></span>
                        <span className="eb3"></span>
                        <span className="eb4"></span>
                        <small>Error Message</small>
                    </div>
                    <div className="input-container">
                        
                        <textarea className="messageInput" style={{height:"80px"}} rows="3" minLength="2" type="text" name="message" id="message" placeholder="." required/>
                        <label className="messageLabel" htmlFor="message">Message*</label>
                        <span className="mb1"></span>
                        <span className="mb2"></span>
                        <span className="mb3"></span>
                        <span className="mb4"></span>
                        <small style={{top:"110px"}}>Error Message</small>
                    </div>

                    <button type="submit" value="Send" className="submitButton" >Submit </button>
                    <img className="flight" src={`${CDN}/icons/flight.svg`} alt="" />
                    
                </form>
            </div>
            
            </div>
        </motion.div>
        </div>
        
        
        );

}

 
export default Contact;