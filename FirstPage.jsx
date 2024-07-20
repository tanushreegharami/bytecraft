import hm from './img/hm.jpg';
import AOS from 'aos'
function FirstPage(){
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    AOS.init();


    setInterval(() =>{
        location.replace('/home')
    },2000)


    
    return(
        <>
       <div className="firstmain" class="flex">
       <div className="divbody" class=" w-screen h-screen bg-slate-900 relative text-center justify-center items-center  "  >
            <img src={hm} class="object-cover  mix-blend-overlay absolute h-screen w-screen" />
           <div className="texts" class="flex justify-center items-center"   > <p class="text-red-300  relative mt-96 "     >B Y T E C R A F T  </p  ><p class="text-white  relative mt-96 ml-4">S O L U T I O N S</p></div>
        <div className="h1" class="text-white" data-aos="fade-right" data-aos-duration="1000">Innovation & You</div>
        </div>
        </div>
       
        </>
    )
}
export default FirstPage