import Heroimg from '../assets/Hero.avif'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        
        <div className='w-1/3 flex flex-col'>
            <h1 className='md:w-1/3 text-white text-4xl font-hero-font'>Hi, <br/> I am Abbishanth
            <p className='text-2xl'>I am a Full Stack Developer</p>
            </h1>
            <div className='flex gap-5 py-3'>
                <a href='#' aria-label="Twitter" >
                    <AiOutlineTwitter className="text-black text-3xl hover:text-white" />
                </a>
                <a href='#' aria-label="Facebook">
                    <AiOutlineFacebook className="text-black text-3xl hover:text-white" />
                </a>
                <a href='#' aria-label="LinkedIn">
                    <AiOutlineLinkedin className="text-black text-3xl hover:text-white" />
                </a>
            </div>

        </div>
        
        <img className='md:w-1/3' src={Heroimg} alt="Hero" />
    </section> 

}