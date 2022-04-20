import React,{ useEffect } from 'react';

import { CDN } from '../config';

function CursorFollower() {

    
    useEffect(()=>{

        const cursorFollower = document.querySelector(".cursor-follower");
        let posX = 0, posY = 0, mouseX = 0, mouseY = 0, speed =0.2;

        const animate = function() {
            mouseX += (posX - mouseX) *speed;
            mouseY += (posY - mouseY) *speed;

            cursorFollower.style.left = mouseX -18 + "px";
            cursorFollower.style.top = mouseY -18 + "px";

            requestAnimationFrame(animate)
        }

        animate()

        document.addEventListener("mousemove", function(e){
            posX = e.clientX;
            posY = e.clientY;
        })

        const projects = document.querySelectorAll(".project");
        const talk = document.querySelector(".talk");
        const caseSpan = document.querySelector(".case");
        const hireSpan = document.querySelector(".hire");

        projects.forEach( project =>{
            project.addEventListener("mouseenter", function(){
                cursorFollower.classList.add("active");
                caseSpan.style.opacity = 1;
            });
            project.addEventListener("mouseleave", function(){
                cursorFollower.classList.remove("active");
                caseSpan.style.opacity = 0;
            });
        });


        if(talk){
            talk.addEventListener("mouseenter", function(){
                talk.style.cursor = "none";
                cursorFollower.classList.add("activehire");
                hireSpan.style.opacity = 1;
            });
            talk.addEventListener("mouseleave", function(){
                cursorFollower.classList.remove("activehire");
                hireSpan.style.opacity = 0;
            });
        }

        document.addEventListener("mouseleave", function(){
            cursorFollower.style.display = "none";
        })
        document.addEventListener("mouseenter", function(){
            cursorFollower.style.display = "block";
        })
        
    });

    return(
        <div className="cursor-follower">
            <span className="case">
                <img src={`${CDN}/icons/goto.svg`} alt="" />Case Study
            </span>
            <span className="hire">
                <img src={`${CDN}/icons/hireme.svg`} alt="" />Let's Talk
            </span>
            
        </div>
    );
    
}
 
export default CursorFollower;