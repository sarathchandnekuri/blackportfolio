import React, {useEffect } from 'react';


import { Link } from 'react-router-dom';

import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {motion} from 'framer-motion';
import CursorFollower from '../components/cursorFollower';

import { CDN } from '../config';



function Project2() {

   
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from( ".cover-bg img", {duration:1, y:-50,scale:0.9} )
        gsap.from(".main-header span", {duration:0.8, delay:1,opacity:0, stagger:0.2, y:"80%",ease: "back.out(1.7)"})
        gsap.from( ".project-container p",{ 
            scrollTrigger:{
                trigger:".project-container p"
        },duration:0.5, opacity:0.5,x:"20px" })

        gsap.from( ".lo-fi-img",{ 
            scrollTrigger:{
                trigger:".lo-fi-img",
                start:"10% 80%",
                scrub:true,
                end:"+=254",
        }, height:"180vh", marginLeft:"0px" })

        
    }, [])


    function refreshST(){
        ScrollTrigger.refresh(true);
    }; 
    setTimeout(()=>{
        refreshST()
    },2000) 
    
     
    return (
        <div><CursorFollower/>

{/* <MetaTags>
            <title>Responsive Website Design by Sarath Chand</title>
            <meta name="description" content="A Responsive website is desinged by Sarath Chand as a Google UX Course Project" />
            <meta property="og:title" content="Sarath Chand" />
            <meta property="og:image" content={rogalik} />
        </MetaTags> */}

        <motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{ duration: 1.5 }}
        exit={{opacity:0}}
         className="homer">
            {/* <cursorFollower/> */}
            
            <div className="project-1">
            <div className="p1"></div>
            <div className="p1-cover-image">
                <div className="cover-bg ">
                    <img className="mt-180" src={`${CDN}/images/images/bakImg.png`} alt="" />
                    <div className="heading"> 
                        <div className="headingflex">
                        <p> Ca<span className="backtext">s</span>e&nbsp;</p><p>S<span className="backtext">t</span>udy                                
                        </p>
                        </div>
                        
                        <div className='heading-footer'>

                        <div className='res-d-none'>
                        <b style={{textDecoration:'underline'}}>Role:</b> UI & UX Designer
                        </div>
                        
                        
                        <div style={{display:'flex', alignItems:'center'}}>

                        <b className='res-d-none' style={{textDecoration:'underline'}}>Project: </b>
                        <h2 className="main-header">
                            <span> Bakery </span>
                            <span>Website </span>
                            <span>Design </span>
                        </h2>
                        </div>

                        <div className='res-d-none'>
                             <a href={`${CDN}/Bakery_Case_Study.pdf`} target="_blank" rel="noreferrer" className="deck-btn">PITCH DECK</a>
                        </div>

                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="project-container">
                <div className="pc1">
                    <div className="pc1-sec">
                        <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="product-icon" transform="translate(-3495 -2543)">
                                <circle id="Ellipse_27" data-name="Ellipse 27" cx="18" cy="18" r="18" transform="translate(3495 2543)" fill="#122d34"/>
                                <g id="Group_90" data-name="Group 90">
                                <g id="Group_89" data-name="Group 89">
                                    <g id="Rectangle_89" data-name="Rectangle 89" transform="translate(3504 2555)" fill="none" stroke="#fce264" stroke-linejoin="round" stroke-width="1">
                                    <rect width="18" height="12" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="17" height="11" fill="none"/>
                                    </g>
                                    <rect id="Rectangle_90" data-name="Rectangle 90" width="20" height="2" rx="0.4" transform="translate(3503 2565)" fill="#fce264"/>
                                </g>
                                <g id="Group_68" data-name="Group 68" transform="(-13px, -10px)">
                                    <rect id="Rectangle_93" data-name="Rectangle 93" width="8" height="11" transform="translate(3531 2567)" fill="#122d34"/>
                                    <g id="Group_65" data-name="Group 65" transform="translate(14 10)">
                                    <g id="Rectangle_91" data-name="Rectangle 91" transform="translate(3518 2558)" fill="#122d34" stroke="#fce264" stroke-linejoin="round" stroke-width="1">
                                        <rect width="6" height="9" stroke="none"/>
                                        <rect x="0.5" y="0.5" width="5" height="8" fill="none"/>
                                    </g>
                                    <rect id="Rectangle_92" data-name="Rectangle 92" width="4" height="2" transform="translate(3519 2564.5)" fill="#fce264"/>
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </span>
                        
                        <h2>The Product</h2>
                        <p>Rogalik is a bakery that can offer home delivery or pickup from store of the bakery items. The typical user is between 19-30 years old, Rogalik Bakery goal is to make cake customizing fun, fast, and easy for all types of users. </p>
                    </div>
                    <div className="pc1-sec rmt-5">
                        <span className="p-icon">
                        <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="res-bef" transform="translate(-3642 -2590)">
                                <circle id="Ellipse_45" data-name="Ellipse 45" cx="18" cy="18" r="18" transform="translate(3642 2590)" fill="#122d34"/>
                                <g id="Group_74" data-name="Group 74" transform="translate(-6.967 -2.333)">
                                <g id="Group_91" data-name="Group 91">
                                    <rect id="Rectangle_103" data-name="Rectangle 103" width="13" height="3" rx="0.5" transform="translate(3660.967 2604.333)" fill="#fce264"/>
                                    <rect id="Rectangle_104" data-name="Rectangle 104" width="13" height="3" rx="0.5" transform="translate(3660.967 2609.333)" fill="#fce264"/>
                                    <rect id="Rectangle_105" data-name="Rectangle 105" width="13" height="3" rx="0.5" transform="translate(3660.967 2614.333)" fill="#fce264"/>
                                </g>
                                <g id="Group_92" data-name="Group 92">
                                    <path id="Path_84" data-name="Path 84" d="M.5,0h2c.276,0,.294.2.5.5L4.031.969v1.1L3,2.5c-.319.216-.224.5-.5.5H.5A.5.5,0,0,1,0,2.5V.5A.5.5,0,0,1,.5,0Z" transform="translate(3660.967 2604.333)" fill="#fce264"/>
                                    <path id="Path_87" data-name="Path 87" d="M.5,0h2c.276,0,.294.2.5.5L4.031.969v1.1L3,2.5c-.319.216-.224.5-.5.5H.5A.5.5,0,0,1,0,2.5V.5A.5.5,0,0,1,.5,0Z" transform="translate(3660.967 2609.333)" fill="#fce264"/>
                                    <path id="Path_88" data-name="Path 88" d="M.5,0h2c.276,0,.294.2.5.5L4.031.969v1.1L3,2.5c-.319.216-.224.5-.5.5H.5A.5.5,0,0,1,0,2.5V.5A.5.5,0,0,1,.5,0Z" transform="translate(3660.967 2614.333)" fill="#fce264"/>
                                </g>
                                </g>
                            </g>
                        </svg>


                        </span>
                        <h2>My Role & Responsibilities</h2>
                        <p>UX designer, leading the UX designer leading the Rogalik Bakery website design from conception to delivery. My responsibilities are Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs, determining information architecture, and responsive design.</p>
                    </div>
                </div>
                
                <div className="pc1">
                    <div className="pc1-sec">
                        <span className="p-icon">
                        <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                        <g id="prob-icon-before" transform="translate(-3453 -2587)">
                            <circle id="Ellipse_40" data-name="Ellipse 40" cx="18" cy="18" r="18" transform="translate(3453 2587)" fill="#122d34"/>
                            <g id="Group_70" data-name="Group 70" transform="translate(-42)">
                            <path id="Path_83" data-name="Path 83" d="M0,0H4L3.5,14H.5Z" transform="translate(3511 2595)" fill="#fce264"/>
                            <circle id="Ellipse_39" data-name="Ellipse 39" cx="2" cy="2" r="2" transform="translate(3511 2595)" fill="#fce264"/>
                            </g>
                        </g>
                    </svg>
                        </span>
                    <h2>The Problem</h2>
                    <p>Users who wants to Customize Cake from home/office for either delivery/pickup, to save time.
                    </p>
                    </div>
                
                    <div className="pc1-sec rmt-5">
                    <span className="p-icon">
                        <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="goal-icon" transform="translate(-3549 -2587)">
                                <circle id="Ellipse_41" data-name="Ellipse 41" cx="18" cy="18" r="18" transform="translate(3549 2587)" fill="#122d34"/>
                                <path id="star" d="M9.476.625l-2.2,4.654-4.916.749a1.139,1.139,0,0,0-.6,1.919l3.556,3.621-.841,5.115a1.087,1.087,0,0,0,1.561,1.185l4.4-2.415,4.4,2.415A1.087,1.087,0,0,0,16.4,16.683l-.841-5.115,3.556-3.621a1.139,1.139,0,0,0-.6-1.919L13.6,5.279,11.407.625a1.058,1.058,0,0,0-1.931,0Z" transform="translate(3556.559 2596.001)" fill="#fce264"/>
                            </g>
                        </svg>
                    </span>
                    <h2>The Goal</h2>
                    <p>Design a website for Rogalik Website that allows users to customize cake and can get it by either pickup from store or delivery to home.
                    </p>
                </div>
                
                </div>


                <div className="p-header h-1">
                    <h2 style={{textAlign:"center"}} >Understanding the user</h2>
                    <ul>
                        <li>User research</li>
                        <li>Personas</li>
                        <li>Problem statements</li>
                    </ul>
                </div>
                
                <div className="pc1 leftalign" style={{flexDirection:"column", alignItems:"center"}}>
                    <div className="pc1-secs">
                    <span className="p-icon">
                        <svg className="rtrans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                        <g id="ur-icon" transform="translate(-3642 -2636)">
                            <g id="Group_78" data-name="Group 78">
                            <circle id="Ellipse_45" data-name="Ellipse 45" cx="18" cy="18" r="18" transform="translate(3642 2636)" fill="#122d34"/>
                            <rect id="Rectangle_109" data-name="Rectangle 109" width="18" height="18" rx="1" transform="translate(3651 2645)" fill="#fce264"/>
                            <rect id="Rectangle_110" data-name="Rectangle 110" width="2" height="10" transform="translate(3655 2649) rotate(180deg)" fill="#122d34"/>
                            <rect id="Rectangle_112" data-name="Rectangle 112" width="2" height="10" transform="translate(3663 2649) rotate(180deg)" fill="#122d34"/>
                            <rect id="Rectangle_111" data-name="Rectangle 111" width="2" height="10" transform="translate(3659 2649) rotate(180deg)" fill="#122d34"/>
                            </g>
                        </g>
                        </svg>
                    </span>
                    <h2>User Research Summary</h2>
                    <p className="rwidth100" style={{marginTop:"2rem", textAlign:"center", width:"80%"}}>
                    I conducted user interviews, which I then turned into empathy maps to better understand the target user and their needs. I discovered that many target users feel the cake might not look similar to what they see online and as they need customization they visit store. However, many shopping websites are overwhelming and confusing to navigate, which frustrated many target users. This caused a normally enjoyable experience to become challenging for them, with less customization</p>
                    </div>
                    
                </div>

                <div className="pc1" style={{flexDirection:"column", alignItems:"center"}}>
                    <h2>User Persona</h2>
                    <div className="personas" style={{justifyContent:"center"}}>
                    <div className="persona-conts">
                    <div style={{fontSize:"5rem",fontFamily: 'Ephesis', position:"absolute", fontWeight:"bold"}}>“</div>
                        
                    <h4 style={{marginTop:"5rem"}}>
                    Special Moments are incomplete without cakes, customized cakes are fun</h4>
                    <div className="persona-space">
                        <div className="p-details">
                            <img style={{transform:"scale(0.8)"}} src={`${CDN}/images/images/vinnu.png`} alt="ak" />
                            <div className="details">
                                <ul style={{listStyle:"none"}}>
                                    <li><span style={{fontWeight:"bold"}}>Name:</span> &nbsp; Vineeth</li>
                                    <li><span style={{fontWeight:"bold"}}>Age:</span>&nbsp; 24</li>
                                    <li><span style={{fontWeight:"bold"}}>Hometown:</span>&nbsp; Hyderabad</li>
                                    <li><span style={{fontWeight:"bold"}}>Occupation:</span>&nbsp; Silicon Engineer</li>
                                </ul>
                            </div>
                            
                        </div>
                        <h4 style={{color:"#ea4335", marginTop:"1rem"}}>Problem Statement:</h4>
                        <p>Vineeth is a busy Engineer who needs to Customize cake on-the-go to store or by staying at home because he wants to save time.</p>

                    </div>  

                    </div>

                
                    </div>
                </div>




                <div className="p-header h-2">
                    <h2 style={{textAlign:"center"}}>Starting the design</h2>
                    <ul>
                        <li>Paper Wireframe</li>
                        <li>Digital Wireframe</li>
                        <li>Low-Fidelity Prototype</li>
                        <li>Usability Studies</li>
                    </ul>
                </div>

                
                <div className="lo-fi mt-5">
                    <div className="lfp-bg">
                        <h2 className="mt-5"> Paper Wireframes</h2>
                        <p className="mt-2" style={{textAlign:"center", width:"80%"}}>Next, I sketched out paper wireframes for each screen in my website, keeping the user pain points about navigation, browsing, and customization flow in mind. </p>
                        <div className="pw-images" style={{display:"flex", flexDirection:"row", margin:"2rem"}}>
                            <img src={`${CDN}/images/images/bp1.jpg`} alt=""paper-wireframe/>
                            <img src={`${CDN}/images/images/bp2.jpg`} alt=""paper-wireframe/>
                            <img src={`${CDN}/images/images/bp3.jpg`} alt=""paper-wireframe/>
                        </div>
                    </div>
                    
                </div>


                <div className="lo-fi mt-5">
                    <h2>Digital Wireframes</h2>
                    <p className="mt-2" style={{textAlign:"center", width:"80%"}}>Moving from paper to digital wireframes made it easy to understand how the redesign could help address user pain points and improve the user experience. </p>
                    <img className="lo-fi-img mt-2" src={`${CDN}/images/images/bakImg.png`} alt="Lo-fi-Mockup"/>
                </div>
                
                <div className="lo-fi mt-5">
                    <div className="lfp-bg">
                        <h2 className="mt-5"> Low-Fidelity Prototype</h2>
                        <p className="mt-2" style={{textAlign:"center", width:"80%"}}>To create a low-fidelity prototype, I connected all of the screens involved in the primary user flow of adding a cake to the cart and checking out.</p>
                        <img className="mt-2 lofi-pimg" src={`${CDN}/images/images/roglofiw.PNG`} alt="Lo-fi-Mockup"/>
                        <div className="m53" style={{display:"flex", flexDirection:"row", margin:"5rem"}}>
                            <img  style={{width:"18px", height:"auto", marginRight:"6px"}} src={`${CDN}/icons/link.svg`} alt="link-icon" />
                            <a target="_blank" href="https://xd.adobe.com/view/ddda0a1d-6364-4cce-bfaa-b9febdcaef28-8889/?fullscreen&hints=off" rel="noreferrer">CoVac's low-fidelity prototype</a>
                        </div>
                    </div>
                    
                </div>

                <div className="lo-fi mt-5">
                    <h2>Usability Study: Parameters</h2>
                    <div className="up">
                        <div className="upt">
                            <span className="p-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                <g id="study-icon" transform="translate(-3686 -2636)">
                                    <g id="Group_80" data-name="Group 80" transform="translate(44)">
                                    <g id="Group_78" data-name="Group 78">
                                        <circle id="Ellipse_45" data-name="Ellipse 45" cx="18" cy="18" r="18" transform="translate(3642 2636)" fill="#122d34"/>
                                        <rect id="Rectangle_109" data-name="Rectangle 109" width="18" height="18" rx="1" transform="translate(3651 2645)" fill="#fce264"/>
                                        <rect id="Rectangle_117" data-name="Rectangle 117" width="2" height="10" transform="translate(3665 2649) rotate(90)" fill="#122d34"/>
                                        <rect id="Rectangle_116" data-name="Rectangle 116" width="2" height="10" transform="translate(3655 2659) rotate(270)" fill="#122d34"/>
                                        <rect id="Rectangle_115" data-name="Rectangle 115" width="2" height="10" transform="translate(3665 2653) rotate(90)" fill="#122d34"/>
                                    </g>
                                    </g>
                                    <circle id="Ellipse_46" data-name="Ellipse 46" cx="3" cy="3" r="3" transform="translate(3701 2642)" fill="#fce264"/>
                                    <circle id="Ellipse_47" data-name="Ellipse 47" cx="1" cy="1" r="1" transform="translate(3703 2644)" fill="#122d34"/>
                                </g>
                                </svg> 
                            </span>
                            <h3>Study Type</h3>
                            <p>Unmoderated Study</p>
                        </div>
                        <div className="upt">
                            <span className="p-icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                <g id="location-aft" transform="translate(-3642 -2683)">
                                    <circle id="Ellipse_48" data-name="Ellipse 48" cx="18" cy="18" r="18" transform="translate(3642 2683)" fill="#122d34"/>
                                    <ellipse id="Ellipse_54" data-name="Ellipse 54" cx="7" cy="1.5" rx="7" ry="1.5" transform="translate(3653 2710)" fill="#293e43"/>
                                    <path id="location" d="M14.5,3a7,7,0,0,0-7,7c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,14.5,3Zm0,9.5A2.5,2.5,0,1,1,17,10,2.5,2.5,0,0,1,14.5,12.5Z" transform="translate(3645.5 2688)" fill="#fce264"/>
                                </g>
                                </svg>



                            </span>
                            <h3>Location</h3>
                            <p>Vijayawada, remote</p>
                        </div>
                        <div className="upt">
                            <span className="p-icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                <g id="part-icon" transform="translate(-3686 -2683)">
                                    <circle id="Ellipse_49" data-name="Ellipse 49" cx="18" cy="18" r="18" transform="translate(3686 2683)" fill="#122d34"/>
                                    <g id="part-icon-2" data-name="part-icon">
                                    <g id="Group_82" data-name="Group 82" transform="translate(87.905 94)">
                                        <g id="Group_71" data-name="Group 71" transform="translate(3605 2610.762)">
                                        <path id="Rectangle_102" data-name="Rectangle 102" d="M0,0H16a0,0,0,0,1,0,0V2.5a.5.5,0,0,1-.5.5H.5A.5.5,0,0,1,0,2.5V0A0,0,0,0,1,0,0Z" transform="translate(0.095 0.238)" fill="#fce264"/>
                                        </g>
                                        <g id="Group_72" data-name="Group 72" transform="translate(3605 2597)">
                                        <ellipse id="Ellipse_43" data-name="Ellipse 43" cx="8" cy="3" rx="8" ry="3" transform="translate(0.095 11)" fill="#fce264"/>
                                        <circle id="Ellipse_44" data-name="Ellipse 44" cx="4" cy="4" r="4" transform="translate(4.095)" fill="#fce264"/>
                                        </g>
                                    </g>
                                    <g id="Group_83" data-name="Group 83" transform="translate(98.905 98.125)">
                                        <g id="Group_72-2" data-name="Group 72" transform="translate(3605.095 2597)">
                                        <g id="Union_2" data-name="Union 2" transform="translate(3704 2704)" fill="#fce264">
                                            <path d="M -3692.500244140625 -2690.12548828125 L -3697.999755859375 -2690.12548828125 L -3703.5 -2690.12548828125 C -3704.3271484375 -2690.12548828125 -3705.000244140625 -2690.7978515625 -3705.000244140625 -2691.62451171875 L -3705.000244140625 -2693.125 C -3705.000244140625 -2695.197509765625 -3701.484375 -2696.125244140625 -3697.999755859375 -2696.125244140625 C -3694.515625 -2696.125244140625 -3691.000244140625 -2695.197509765625 -3691.000244140625 -2693.125 L -3691.000244140625 -2691.62451171875 C -3691.000244140625 -2690.7978515625 -3691.673095703125 -2690.12548828125 -3692.500244140625 -2690.12548828125 Z" stroke="none"/>
                                            <path d="M -3692.500244140625 -2691.12548828125 C -3692.22412109375 -2691.12548828125 -3692.000244140625 -2691.348388671875 -3692.000244140625 -2691.62451171875 L -3692.000244140625 -2693.125 C -3692.000244140625 -2694.229248046875 -3694.686767578125 -2695.125244140625 -3697.999755859375 -2695.125244140625 C -3701.313720703125 -2695.125244140625 -3704.000244140625 -2694.229248046875 -3704.000244140625 -2693.125 L -3704.000244140625 -2691.62451171875 C -3704.000244140625 -2691.348388671875 -3703.776123046875 -2691.12548828125 -3703.5 -2691.12548828125 L -3692.500244140625 -2691.12548828125 M -3692.500244140625 -2689.12548828125 L -3703.5 -2689.12548828125 C -3704.878662109375 -2689.12548828125 -3706.000244140625 -2690.24658203125 -3706.000244140625 -2691.62451171875 L -3706.000244140625 -2693.125 C -3706.000244140625 -2693.97265625 -3705.59423828125 -2695.530029296875 -3702.875244140625 -2696.4365234375 C -3701.543212890625 -2696.880615234375 -3699.811767578125 -2697.125244140625 -3697.999755859375 -2697.125244140625 C -3696.188232421875 -2697.125244140625 -3694.45703125 -2696.880615234375 -3693.125 -2696.4365234375 C -3690.40625 -2695.530029296875 -3690.000244140625 -2693.97265625 -3690.000244140625 -2693.125 L -3690.000244140625 -2691.62451171875 C -3690.000244140625 -2690.24658203125 -3691.121826171875 -2689.12548828125 -3692.500244140625 -2689.12548828125 Z" stroke="none" fill="#122d34"/>
                                        </g>
                                        <g id="Ellipse_44-2" data-name="Ellipse 44" transform="translate(3 -0.125)" fill="#fce264" stroke="#122d34" stroke-width="1">
                                            <circle cx="3" cy="3" r="3" stroke="none"/>
                                            <circle cx="3" cy="3" r="3.5" fill="none"/>
                                        </g>
                                        </g>
                                    </g>
                                    </g>
                                </g>
                            </svg>

                            </span>
                            <h3>Participants</h3>
                            <p>5 Participants</p>
                        </div>
                        <div className="upt">
                            <span className="p-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                <g id="time-icon" transform="translate(-3856 -2683)">
                                    <circle id="Ellipse_53" data-name="Ellipse 53" cx="18" cy="18" r="18" transform="translate(3856 2683)" fill="#122d34"/>
                                    <g id="Ellipse_55" data-name="Ellipse 55" transform="translate(3865 2693)" fill="none" stroke="#fce264" stroke-width="1">
                                    <circle cx="9" cy="9" r="9" stroke="none"/>
                                    <circle cx="9" cy="9" r="8.5" fill="none"/>
                                    </g>
                                    <rect id="Rectangle_113" data-name="Rectangle 113" width="4" height="3" transform="translate(3872 2691)" fill="#fce264"/>
                                    <rect id="Rectangle_114" data-name="Rectangle 114" width="6" height="2" rx="1" transform="translate(3871 2690)" fill="#fce264"/>
                                    <circle id="Ellipse_56" data-name="Ellipse 56" cx="2" cy="2" r="2" transform="translate(3872 2700)" fill="#fce264"/>
                                    <rect id="nail" width="1" height="6" rx="0.5" transform="translate(3873.5 2696)" fill="#fce264"/>
                                </g>
                            </svg>

                            </span>
                            <h3>Length</h3>
                            <p>20-30 minutes</p>
                        </div>

                    </div>
                </div>

                <div className="lo-fi mt-5">
                    <h2>Usability Study: Findings</h2>
                    <div className="up">
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num1" transform="translate(-3867 -2730)">
                                <circle id="Ellipse_57" data-name="Ellipse 57" cx="18" cy="18" r="18" transform="translate(3867 2730)" fill="#122d34"/>
                                <text id="_1" data-name="1" transform="translate(3878.5 2755)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">1</tspan></text>
                            </g>
                            </svg>
                            </span>
                            
                            <h3>Preview</h3>
                            <p style={{width:"220px"}}>When users see a preview of the cake, users didn’t have a way to go to the home screen</p>
                        </div>
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num2" transform="translate(-3907 -2731)">
                                <circle id="Ellipse_58" data-name="Ellipse 58" cx="18" cy="18" r="18" transform="translate(3907 2731)" fill="#122d34"/>
                                <text id="_2" data-name="2" transform="translate(3919 2756)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">2</tspan></text>
                            </g>
                            </svg>
                            </span>
                            
                            <h3>Customization</h3>
                            
                            <p style={{width:"220px"}}>Even there are good options the users find overwhelmed to choose them.</p>
                        </div>
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num3" transform="translate(-3951 -2731)">
                            <circle id="Ellipse_59" data-name="Ellipse 59" cx="18" cy="18" r="18" transform="translate(3951 2731)" fill="#122d34"/>
                            <text id="_3" data-name="3" transform="translate(3964 2756)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">3</tspan></text>
                        </g>
                            </svg>
                            </span>
                            
                            <h3>Weight</h3>
                            <p style={{width:"220px"}}>During the preview of cake, users have to click the weight dropdown in order to see available weights of the cake.</p>
                        </div>

                    </div>
                </div>

                <div className="p-header h-3">
                    <h2 style={{textAlign:"center"}}>Refine the design</h2>
                    <ul>
                        <li>Mockups</li>
                        <li>Low-fidelity Prototype</li>
                        <li>Accessibility</li>
                    </ul>
                </div>

                <div className="lo-fi mt-5">
                    <h2>Mockups</h2>
                    <p className="mt-2" style={{textAlign:"center", width:"80%"}}>Based on the insights from the usability study, I made changes to improve the Customization flow. The changes I made was creating a card for each customization category and in there radio buttons for single feild and checkbox for multiple feilds weree added. This allowed users more freedom to choose customization option without going through a complicated process.</p>
                    <div className="usability just">
                        <div className="us-b-a">
                            <p className="mt-2" style={{marginLeft:"-32px", fontWeight:"600", fontSize:"0.9rem"}}>Before Usability Study</p>
                            <img className="desktoplofi" src={`${CDN}/images/images/bakbef1.png`} alt="Lo-fi-Mockup"/>
                        </div>
                        <div className="us-b-a">
                            <p className="mt-2" style={{marginLeft:"-32px", fontWeight:"600", fontSize:"0.9rem"}}>After Usability Study</p>
                            <img className="desktoplofi" src={`${CDN}/images/images/baakaft1.png`} alt="Hi-fi-Mockup"/>
                        </div>

                    </div>
                    
                    <p className="mt-5" style={{textAlign:"center", width:"80%"}}>To make the preview screen even easier for users, I added back button to go homescreen and displayed weights that are available with color contrast. </p>
                    <div className="usability just">
                        <div className="us-b-a">
                            <p className="mt-2" style={{marginLeft:"-32px", fontWeight:"600", fontSize:"0.9rem"}}>Before Usability Study</p>
                            <img className="desktoplofi" src={`${CDN}/images/images/bakbef2.png`} alt="Lo-fi-Mockup"/>
                        </div>
                        <div className="us-b-a">
                            <p className="mt-2" style={{marginLeft:"-32px", fontWeight:"600", fontSize:"0.9rem"}}>After Usability Study</p>
                            <img className="desktoplofi" src={`${CDN}/images/images/bakaft2.png`} alt="Hi-fi-Mockup"/>
                        </div>

                    </div>
                
                    <div className="m53" style={{display:"flex", flexDirection:"row", margin:"5rem"}}>
                            <img style={{width:"18px", height:"auto", marginRight:"6px"}} src={`${CDN}/icons/link.svg`} alt="link-icon" />
                            <a target="_blank" href="https://xd.adobe.com/view/5c14edec-774c-498a-a503-46671b57b8e6-0947/?fullscreen" rel="noreferrer">CoVac's High-fidelity prototype</a>
                    </div>
                </div>
                
                


                <div className="lo-fi mt-5">
                    <h2>Accessibility considerations</h2>
                    <div className="up">
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                            <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num1" transform="translate(-3867 -2730)">
                                <circle id="Ellipse_57" data-name="Ellipse 57" cx="18" cy="18" r="18" transform="translate(3867 2730)" fill="#122d34"/>
                                <text id="_1" data-name="1" transform="translate(3878.5 2755)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">1</tspan></text>
                            </g>
                            </svg>
                            </span>
                            <p style={{width:"220px"}}>I used headings with different sized text for clear visual hierarchy, and kept a categories on navigation bar that are on homescreen for easy navigation.</p>
                        </div>
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                            <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num2" transform="translate(-3907 -2731)">
                                <circle id="Ellipse_58" data-name="Ellipse 58" cx="18" cy="18" r="18" transform="translate(3907 2731)" fill="#122d34"/>
                                <text id="_2" data-name="2" transform="translate(3919 2756)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">2</tspan></text>
                            </g>
                            </svg>
                            </span>
                            <p style={{width:"220px"}}>I used landmarks to help users navigate the site, including users who rely on assistive technologies.</p>
                        </div>
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                        <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                        <g id="num3" transform="translate(-3951 -2731)">
                            <circle id="Ellipse_59" data-name="Ellipse 59" cx="18" cy="18" r="18" transform="translate(3951 2731)" fill="#122d34"/>
                            <text id="_3" data-name="3" transform="translate(3963 2756)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">3</tspan></text>
                        </g>
                        </svg>
                        </span>
                            <p style={{width:"220px"}}>I designed the site with alt text available on each page for smooth screen reader access.</p>
                        </div>

                    </div>
                </div>

                
                <div className="p-header h-4">
                    
                    <h2 style={{textAlign:"center"}}>Going Forward</h2>
                    <ul>
                        <li>Take Aways</li>
                        <li>Next Steps</li>
                    </ul>
                </div>

                <div className="lo-fi mt-5">
                    <h2>Takeaways</h2>
                    <div className="up mt-2">
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                        <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="impact-icon-bef" transform="translate(-3686 -2636)">
                                <g id="Group_80" data-name="Group 80" transform="translate(44)">
                                <g id="Group_78" data-name="Group 78">
                                    <circle id="Ellipse_45" data-name="Ellipse 45" cx="18" cy="18" r="18" transform="translate(3642 2636)" fill="#122d34"/>
                                    <rect id="Rectangle_109" data-name="Rectangle 109" width="18" height="18" rx="1" transform="translate(3651 2645)" fill="#fce264"/>
                                    <path id="Path_89" data-name="Path 89" d="M3655.806,2654h0" transform="translate(4.194 1.395)" fill="none" stroke="#122d34" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                </g>
                                </g>
                                <circle id="Ellipse_46" data-name="Ellipse 46" cx="3" cy="3" r="3" transform="translate(3701 2642)" fill="#fce264"/>
                                <circle id="Ellipse_47" data-name="Ellipse 47" cx="1" cy="1" r="1" transform="translate(3703 2644)" fill="#122d34"/>
                            </g>
                        </svg>
                        </span>     
                            <h3>Impact</h3>
                            <p style={{width:"360px", marginTop:"2rem"}}>Our target users shared that the design was intuitive to navigate through, more engaging with the images, and demonstrated a clear visual hierarchy. </p>
                        </div>
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                        <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                        <g id="book" transform="translate(-3812 -2683)">
                            <circle id="Ellipse_52" data-name="Ellipse 52" cx="18" cy="18" r="18" transform="translate(3812 2683)" fill="#122d34"/>
                            <path id="Icon_ionic-md-book" data-name="Icon ionic-md-book" d="M21.558,5.645,13.375,7.19,5.192,5.645A1.7,1.7,0,0,0,3.375,7.461V19.27c0,1,.769,1.575,1.817,1.816l8.183,1.541,8.183-1.546c1.048-.241,1.817-.816,1.817-1.816V7.461A1.7,1.7,0,0,0,21.558,5.645Zm0,13.62-7.269,1.546V9l7.269-1.546Zm-9.1,1.546L5.192,19.265V7.461l7.269,1.546Z" transform="translate(3816.625 2687.373)" fill="#fce264"/>
                            <line id="Line_26" data-name="Line 26" y1="1" x2="4" transform="translate(3832.5 2698)" fill="none" stroke="#fce264" stroke-width="1"/>
                            <line id="Line_27" data-name="Line 27" y1="1" x2="4" transform="translate(3832.5 2701)" fill="none" stroke="#fce264" stroke-width="1"/>
                            <line id="Line_25" data-name="Line 25" y1="1" x2="4" transform="translate(3832.5 2704)" fill="none" stroke="#fce264" stroke-width="1"/>
                        </g>
                        </svg>

                        
                        </span>
                            <h3>What I learned</h3>
                            <p style={{width:"360px", marginTop:"2rem"}}>I learned that even a small design change like cards on customization page can have a huge impact on the user experience. The most important takeaway for me is to always focus on the real needs of the user when coming up with design ideas and solutions. </p>
                        </div>

                    </div>
                </div>

                <div className="lo-fi mt-5">
                    
                    <h2>Next Steps</h2>
                    <div className="up">
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num1" transform="translate(-3867 -2730)">
                                <circle id="Ellipse_57" data-name="Ellipse 57" cx="18" cy="18" r="18" transform="translate(3867 2730)" fill="#122d34"/>
                                <text id="_1" data-name="1" transform="translate(3878.5 2755)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">1</tspan></text>
                            </g>
                            </svg>
                            </span>
                            <p style={{width:"240px"}}>Conduct follow-up usability testing on the new responsive website.
    </p>
                        </div>
                        <div className="upt persona-cont" style={{alignItems:"flex-start"}}>
                        <span className="p-icon">
                            <svg className="trans" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="num2" transform="translate(-3907 -2731)">
                                <circle id="Ellipse_58" data-name="Ellipse 58" cx="18" cy="18" r="18" transform="translate(3907 2731)" fill="#122d34"/>
                                <text id="_2" data-name="2" transform="translate(3919 2756)" fill="#fce264" font-size="20" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">2</tspan></text>
                            </g>
                            </svg>
                            </span>
                            <p style={{width:"240px"}}>Identify any additional areas of need and ideate on new features</p>
                        </div>

                    </div>
                </div>
            </div>
        
            <div className="deck-container">
                <a href={`${CDN}/Bakery_Case_Study.pdf`} target="_blank" rel="noreferrer" className="deck-btn">Pitch Deck</a>
            </div>

            <div className="other-projects-container">
                <h2 style={{textAlign:"center"}} >Other Projects</h2>
                <div className="other-projects">
                <div className="project op">
                    <Link style={{cursor:"none"}} to="/covac">
                        <img className="project-image second-p" src={`${CDN}/images/images/covac-thumbnail.png`} alt="" />
                    </Link>
                </div>

                <div className="project op">
                    <Link style={{cursor:"none"}} to="/mia-restaurant">
                        <img className="project-image third-p" src={`${CDN}/images/images/mia-thumbnail.png`} alt="" />
                    </Link>
                </div>
                </div>
            </div>


            </div>

        </motion.div>
        </div>
        
        );
    
}
 
export default Project2;