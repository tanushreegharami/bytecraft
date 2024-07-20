import link from './img/linked.png';
import face from './img/facebook.png';
import insta from './img/social (1).png';
function SocialIcon(){
    return(
        <>
        <div className="icons" class="mt-96 flxed " >
            <img src={face} class="h-10 absolute inset-y-0 right-0 " />
            <img src={link} class="h-10 absolute inset-y-0 mt-20  right-0" />
            <img src={insta} class="h-10 absolute mt-10 inset-y-0 right-0 " />
        </div>
        </>
    )
}
export default SocialIcon