
function Navbar(){
    return(
        <>
        <div className="nav" class="relative bg-fixed">
            <div className="nav_items" class=" h-20 bg-gradient-to-l from-slate-800  to-black w-screen gap-12 flex items-center  " >
                <a href="/"  class="text-white gap-2 font-thin ml-20">HOME</a>
                <a href="/about" class="text-white gap-2 font-thin" >ABOUT</a>
                <a href="/contact" class="text-white gap-2 font-thin" >CONTACT</a>
                <a href="/service" class="text-white gap-2 font-thin" >SERVICE</a>
            </div>
        </div>
        </>
    )
}
export default Navbar;