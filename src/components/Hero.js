// import { spinner } from '../Pages/Loading-page/spinner';
import { Typewriter } from 'react-simple-typewriter'
import React from 'react'
import { Link } from 'react-router-dom'


import AOS from 'aos';
import 'aos/dist/aos.css';
// import Socialicons from './Social_Icons';
AOS.init();



const Hero = () => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000">
      
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img data-aos="fade-up"
     data-aos-duration="3000" className="object-cover object-center rounded" alt="hero" src=".\assets\11.png"/>
            </div>
                <div data-aos="fade-up"
     data-aos-duration="3000"className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#c58f00]">HI !
                        <br className="hidden lg:inline-block"/>I'm   
                        <span>
                        <Typewriter
                               words={['  Vishwa Bulegodaarachchi','  Vishwa Bulegodaarachchi','  Vishwa Bulegodaarachchi']}
                               loop={Infinity}
                               cursor
                               cursorStyle='_'
                               typeSpeed={70}
                               deleteSpeed={50}
                               delaySpeed={10000000}
                            />
                        </span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-400">I’m a Vector art designer specializing in designing exceptional digital experiences. Currently, I’m focused on drawing vector art graphics.</p>
                    <div className="flex justify-center">
                        <Link to='Contact'>
                        <button className="inline-flex text-white bg-[#c58f00] border-0 py-2 px-6 focus:outline-none hover:bg-[#e8bd47] rounded text-lg">Let's Talk</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* <Socialicons/> */}
    </div>
  )
}

export default Hero