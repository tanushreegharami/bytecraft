
import './App.css'
import Navbar from './Navbar'
import itImage1 from './img/itsec.jpg'
import itImage from './img/itsec2.jpg'
import itImage6 from './img/itsec.jpg'

import team1 from './img/team1.jpg'
import team2 from './img/team2.jpg'
import graph4 from './img/graph4.jpg'
import it1 from './img/it1.jpg'
import graph7 from './img/graph7.jpg'
import itsec3 from './img/itsec3.png'
import cons from './img/cons.jpg'
import it2 from './img/it2.jpg'
import graph10 from './img/graph10.jpg'
import cons2 from './img/cons2.jpg'
import imp3 from './img/imp3.jpg'
import imp2 from './img/cons2.jpg'

import SocialIcon from './SocialIcon'


import AOS from 'aos'


function Home() {
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

  AOS.init();

  return (
    <>
    <Navbar/>
    <div className="carasel" class="flex  " >
      <div className="carasel1" class="h-screen w-3/6  ml-0 mt-0" >
      <img src={itImage6} alt='texh_image' class="w-full h-screen  " /></div>


      <div className="carasel1" class="h-screen w-3/6 bg-slate-950 ml-0 mt-0   relative     " ><img src={itImage} alt='texh_image' class=" absolute mix-blend-overlay  w-full h-screen  " /><div className="blutexts " class="flex ">
        <h2  class="text-red-300 text-left ml-24 mt-80 " data-aos="fade-right" data-aos-duration="1000" >B Y T E C R E A F T    </h2><h2  class="text-orange-300  ml-4 mt-80 "  data-aos="fade-right" data-aos-duration="1000" > S O L U T I O N S</h2></div>
        <h1 id="changeText" class="text-white ml-24  text-left mt-2   "  data-aos="fade-up" data-aos-duration="1000">Business Consulting</h1>
        <p class="ml-24 mt-6"   data-aos="fade-right" data-aos-duration="1000" >An IT Company you can trust : )</p>
        </div>
    </div>


    <div className="headers"><h4 class="text-orange-300 text-center mt-32 font-serif" data-aos="fade-up" data-aos-duration="1000" >OUR VISSION & MISSIONS</h4></div>
    <div className="2ndsec" class="bg-white mb-10 "  >
    <h1 class="text-slate-800 font-thin text-center mt-7 font-mono" data-aos="fade-up" data-aos-duration="1000">Demonstrate business innovation every</h1>
   <h1 class="text-slate-800 font-thin text-center font-mono  " data-aos="fade-up" data-aos-duration="1000"> step of the way with  BYTECRAFT.  </h1>
  <div className="knowdiv"class="flex justify-center"  > <div className="div" class="bg-orange-200 h-10 w-40 mt-16 content-center text-center" data-aos="fade-right" data-aos-duration="1000" ><p class="text-black">KNOW MORE</p></div></div>
    </div>


   <div className="cardsec" class="flex mt-20 ml-20 mr-20 justify-evenly" >
    
   <div className="cards" class=" w-1/3   mb-20                   " >


   <div className="textimgC" class="relative">
   <img src={graph4} class=" object-cover hover:scale-110  duration-500 " />
   
   
   </div>
   <img src={it1} class=" object-cover mt-7 hover:scale-110 transition-all duration-500 " /><p class="text-black mt-5" >ABOUT US</p>
   </div>



    <div className="cards" class=" w-96  " >
    <img src={graph7} class=" object-cover hover:scale-110 transition-all duration-500 " /><p class="mt-5 text-black">ABOUT MARKETING</p>
    </div>
    <div className="cards" class="h-96 w-96  shadow-slate-500 " ><img src={team2} class=" object-cover hover:scale-110 transition-all duration-500 " /><p class="text-black mt-5" >ABOUT OUR TEAM</p></div>
   
   </div>









   <div className="cardsec" class="flex  ml-20 mr-20 justify-evenly mt-5 " >
    

    <div className="cards" class=" w-96   " >
    <img src={it2} class=" object-cover hover:scale-110 transition-all duration-500 " /><p class="text-black mt-12">INNOVATIONS</p>

    
    </div>
    <div className="cards" class="h-96 w-96  shadow-slate-500 mt-8 mb-20" ><img src={cons} class=" object-cover hover:scale-110 transition-all duration-500 " /><p class="text-black mt-10">BUSINESS MANAGEMENT</p></div>
   <div className="cards" class=" w-1/3    shadow-slate-500 mb-20" >
   <img src={graph10} class=" object-cover hover:scale-110 transition-all duration-500 " />
   <img src={itsec3} class=" object-cover mt-7 hover:scale-110 transition-all duration-500 " /><p class="text-black mt-7">ABOUT STRATEGY </p>
   </div>
   </div>




    




   <div className="thirdsec" class="flex mt-20 ">
  


    <div className="bluediv" class="h-screen bg-slate-950 w-1/2 relative "  data-aos="fade-right" data-aos-duration="1000"   ><img src={imp3} class="h-screen w-screen absolute mix-blend-overlay" />
    <div className="texts"><h1 class="text-white font-mono text-left text-3xl mt-24 ml-24 mr-24 "   > Fully responsive & customizable theme for your new website</h1></div>
    </div>

    <div className="whitediv" class="bg-slate-100 h-screen w-1/2"><img src={imp2} class="mt-24" /></div>

    </div>







   <div className="forthsec">
    <div className="header1" class="text-red-400 flex ml-24  mt-32 ">
      <p>I C R E D I B L E </p > <p class="ml-3">I D E A S </p>
    </div>
    <h1 class=" text-slate-700  font-mono text-left ml-24 mt-10  mr-40" >Incredible set of inner pages made for a variety of uses</h1>
   </div>
    </>
  ) 
}

export default Home
