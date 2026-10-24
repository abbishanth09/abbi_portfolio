import Heroimg from '../assets/Hero.avif'
import { AiOutlineTwitter } from "react-icons/ai";

export default function Hero() {
    return <section className='flex px-5 py-32 bg-secondary justify-center'>
        
        <div className='w-1/3 flex flex-col'>
            <h1 className='w-1/3 text-white text-4xl font-hero-font'>Hi, <br/> I am Abbishanth
            <p className='text-2xl'>I am a Full Stack Developer</p>
            </h1>
            <div>
                <a href='#' aria-label="Twitter">
                    <AiOutlineTwitter className="text-black text-3xl" />
                </a>
            </div>

        </div>
        
        <img className='w-1/3' src={Heroimg} alt="Hero" />
    </section> 

}