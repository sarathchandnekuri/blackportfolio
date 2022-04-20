import React,{useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import gsap from 'gsap';
import {CDN} from '../config';


function NavBar() {
    

   
    useEffect(()=>{
        const menuBar = document.querySelector(".menubar");
        const menu = document.querySelector(".menu");
        const body = document.querySelector("body");

        //if(menuBar)
        menuBar.addEventListener("click", function () {
            menu.classList.toggle("slide");
            body.classList.toggle("stop-scrolling");
            document.getElementById("Rectangle_136").classList.toggle("r136");
            document.getElementById("Rectangle_137").classList.toggle("r137");
            document.getElementById("Rectangle_138").classList.toggle("r138");
            
            gsap.from(".work", { duration: 0.5, delay:0.5, opacity:0, y:80})
            gsap.from(".resume", { duration: 0.5, delay:0.7, opacity:0, y:80})
            gsap.from(".contact", { duration: 0.5, delay:0.9, opacity:0, y:80})
            gsap.from(".about", { duration: 0.5, delay:1.1, opacity:0, y:80})
        })

        const work = document.querySelector(".work");
        const contact = document.querySelector(".contact");
        const about = document.querySelector(".about");

        work.addEventListener("click",function(){
            work.classList.add("active-menu");
            contact.classList.remove("active-menu");
            about.classList.remove("active-menu");
            if(window.screen.width < 1024){
                setTimeout(function(){
                    menu.classList.remove("slide");
                    body.classList.toggle("stop-scrolling");
                    document.getElementById("Rectangle_136").classList.toggle("r136");
                    document.getElementById("Rectangle_137").classList.toggle("r137");
                    document.getElementById("Rectangle_138").classList.toggle("r138");
                },1000)
                
            }
        })

        contact.addEventListener("click",function(){
            work.classList.remove("active-menu");
            contact.classList.add("active-menu");
            about.classList.remove("active-menu");
            if(window.screen.width < 1024){
                setTimeout(function(){
                    menu.classList.remove("slide");
                    body.classList.toggle("stop-scrolling");
                    document.getElementById("Rectangle_136").classList.toggle("r136");
                    document.getElementById("Rectangle_137").classList.toggle("r137");
                    document.getElementById("Rectangle_138").classList.toggle("r138");
                },1000)
            }
        })

        about.addEventListener("click",function(){
            work.classList.remove("active-menu");
            contact.classList.remove("active-menu");
            about.classList.add("active-menu");
            if(window.screen.width < 1024){
                setTimeout(function(){
                    menu.classList.remove("slide");
                    body.classList.toggle("stop-scrolling");
                    document.getElementById("Rectangle_136").classList.toggle("r136");
                    document.getElementById("Rectangle_137").classList.toggle("r137");
                    document.getElementById("Rectangle_138").classList.toggle("r138");
                },1000)
            }
        })

        const logo = document.querySelector("#logo");
        if(logo){
            logo.addEventListener("mouseenter", function(){
                document.getElementById("Subtraction_9").classList.add("sub9Rot")
                document.getElementById("Subtraction_10").classList.add("sub10Rot")
                document.getElementById("Subtraction_6").classList.add("sub6Rot")
                
            });
            logo.addEventListener("mouseleave", function(){
                setTimeout(function () {
                    document.getElementById("Subtraction_9").classList.remove("sub9Rot")
                    document.getElementById("Subtraction_6").classList.remove("sub6Rot")
                    document.getElementById("Subtraction_10").classList.remove("sub10Rot")
                },2000)
            });
        }
        
    

    },[])

    return (
        <div className="home">
            <div className="navbar">
                
                <Link aria-label="SC Logo" className="logoC" to="/">
                    <svg style={{marginBottom:"-32px"}} xmlns="http://www.w3.org/2000/svg" width="221.536" height="187.5" viewBox="0 0 221.536 187.5">
                    <g id="logo" transform="translate(-4197.231 -4390.5)">
                        <g id="Subtraction_9" className="sub9" data-name="Subtraction 9" transform="translate(4197.595 4390.5)" fill="none">
                        <path d="M62.137,125A62.516,62.516,0,0,1,37.809,4.912a62.445,62.445,0,0,1,68.6,13.468L62.636,62.5l43.768,44.12A62.3,62.3,0,0,1,62.137,125Z" stroke="none"/>
                        <path d="M 62.13690948486328 125.0001220703125 C 53.69945907592773 125.0001220703125 45.51435852050781 123.3476715087891 37.80905914306641 120.0886154174805 C 30.36650848388672 116.9407196044922 23.68245887756348 112.4342193603516 17.94250869750977 106.6943206787109 C 12.20255947113037 100.9544219970703 7.696009159088135 94.27037048339844 4.548058986663818 86.82781982421875 C 1.288909077644348 79.12242126464844 -0.3635909557342529 70.93721771240234 -0.3635909557342529 62.49961853027344 C -0.3635909557342529 54.06221771240234 1.288909077644348 45.87717056274414 4.548058986663818 38.17186737060547 C 7.696009159088135 30.72951889038086 12.20255947113037 24.04551887512207 17.94250869750977 18.30566787719727 C 23.68245887756348 12.56586837768555 30.36650848388672 8.059418678283691 37.80905914306641 4.911518573760986 C 45.51440811157227 1.652518630027771 53.69945907592773 1.866455022536684e-05 62.13690948486328 1.866455022536684e-05 C 70.59291076660156 1.866455022536684e-05 78.79435729980469 1.659368634223938 86.51341247558594 4.931918621063232 C 93.96926116943359 8.092918395996094 100.661506652832 12.61726856231689 106.4043121337891 18.37931823730469 L 62.63640975952148 62.50046920776367 L 106.4041061401367 106.6208190917969 C 100.6605606079102 112.3837203979492 93.96830749511719 116.9076690673828 86.5133056640625 120.0683212280273 C 78.79435729980469 123.3408203125 70.59295654296875 125.0001220703125 62.13690948486328 125.0001220703125 Z" stroke="none" fill="#122d34"/>
                        </g>
                        <g id="Subtraction_10" className="sub10" data-name="Subtraction 10" transform="translate(4312 4578) rotate(180)" fill="none">
                        <path d="M62.5,0A62.516,62.516,0,0,0,38.173,120.089a62.446,62.446,0,0,0,68.6-13.468L63,62.5l43.768-44.12A62.3,62.3,0,0,0,62.5,0Z" stroke="none"/>
                        <path d="M 62.50058746337891 0 C 70.95668792724609 0 79.15808868408203 1.6593017578125 86.87703704833984 4.931800842285156 C 94.33208465576172 8.092453002929688 101.0243377685547 12.61634826660156 106.7678833007812 18.37930297851562 L 63.00008773803711 62.49959945678711 L 106.7680892944336 106.6206970214844 C 101.0252838134766 112.3827514648438 94.33298492431641 116.907096862793 86.87713623046875 120.0680999755859 C 79.15808868408203 123.3406524658203 70.95663452148438 125 62.50058746337891 125 C 54.06318664550781 125 45.87808609008789 123.3475036621094 38.17268371582031 120.0885009765625 C 30.73018646240234 116.9405975341797 24.04608917236328 112.4342041015625 18.30613708496094 106.6943511962891 C 12.56613922119141 100.9544982910156 8.059585571289062 94.27055358886719 4.911636352539062 86.82815551757812 C 1.652534484863281 79.12284851074219 -1.52587890625e-05 70.93785095214844 -1.52587890625e-05 62.50045013427734 C -1.52587890625e-05 54.06285095214844 1.652534484863281 45.87764739990234 4.911636352539062 38.17224884033203 C 8.059585571289062 30.72969818115234 12.56613922119141 24.04570007324219 18.30613708496094 18.30574798583984 C 24.04608917236328 12.56590270996094 30.73018646240234 8.059402465820312 38.17268371582031 4.9114990234375 C 45.87803649902344 1.652450561523438 54.06313705444336 0 62.50058746337891 0 Z" stroke="none" fill="#122d34"/>
                        </g>
                        <g id="Subtraction_6" className="sub6" data-name="Subtraction 6" transform="translate(4312 4453)" fill="none">
                        <path d="M62.137,125A62.516,62.516,0,0,1,37.809,4.912a62.445,62.445,0,0,1,68.6,13.468L62.636,62.5l43.768,44.12A62.3,62.3,0,0,1,62.137,125Z" stroke="none"/>
                        <path d="M 62.13690948486328 125.0001220703125 C 53.69945907592773 125.0001220703125 45.51435852050781 123.3476715087891 37.80905914306641 120.0886154174805 C 30.36650848388672 116.9407196044922 23.68245887756348 112.4342193603516 17.94250869750977 106.6943206787109 C 12.20255947113037 100.9544219970703 7.696009159088135 94.27037048339844 4.548058986663818 86.82781982421875 C 1.288909077644348 79.12242126464844 -0.3635909557342529 70.93721771240234 -0.3635909557342529 62.49961853027344 C -0.3635909557342529 54.06221771240234 1.288909077644348 45.87717056274414 4.548058986663818 38.17186737060547 C 7.696009159088135 30.72951889038086 12.20255947113037 24.04551887512207 17.94250869750977 18.30566787719727 C 23.68245887756348 12.56586837768555 30.36650848388672 8.059418678283691 37.80905914306641 4.911518573760986 C 45.51440811157227 1.652518630027771 53.69945907592773 1.866455022536684e-05 62.13690948486328 1.866455022536684e-05 C 70.59291076660156 1.866455022536684e-05 78.79435729980469 1.659368634223938 86.51341247558594 4.931918621063232 C 93.96926116943359 8.092918395996094 100.661506652832 12.61726856231689 106.4043121337891 18.37931823730469 L 62.63640975952148 62.50046920776367 L 106.4041061401367 106.6208190917969 C 100.6605606079102 112.3837203979492 93.96830749511719 116.9076690673828 86.5133056640625 120.0683212280273 C 78.79435729980469 123.3408203125 70.59295654296875 125.0001220703125 62.13690948486328 125.0001220703125 Z" stroke="none" fill="#122d34"/>
                        </g>
                    </g>
                    </svg>

                </Link>

                <div className="menubar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <g id="menu-1" transform="translate(-125 -125)">
                            <rect id="Rectangle_136" data-name="Rectangle 136" width="36" height="3" transform="translate(131.838 139.593)" fill="#122d34"/>
                            <rect id="Rectangle_137" data-name="Rectangle 137" width="36" height="3" transform="translate(131.838 148.593)" fill="#122d34"/>
                            <rect id="Rectangle_138" data-name="Rectangle 138" width="36" height="3" transform="translate(131.838 157.593)" fill="#122d34"/>
                        </g>
                    </svg>
                </div>


                <ul className="menu">
                    <li><NavLink exact activeClassName="active-menu" className="menu-bg work" to="/">Home</NavLink></li>
                    <li><a className="menu-bg resume" href = {`${CDN}/Sarath_Resume-min.pdf`} target = "_blank" rel="noreferrer" >Resume</a></li>
                    <li><NavLink exact activeClassName="active-menu" className="menu-bg contact" to="/contact">Contact</NavLink></li>
                    <li><NavLink exact activeClassName="active-menu" className="menu-bg about" to="/about">About Me</NavLink></li>
                </ul>
            </div>
            
        </div>
        
    );
}

 
export default NavBar;