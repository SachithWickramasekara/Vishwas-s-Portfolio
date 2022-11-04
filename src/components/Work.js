import React from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageGallery from './ImageGallery'
AOS.init();
const Work = () => {
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img data-aos="fade-up"
     data-aos-duration="3000" alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="assets\New folder\1.jpg"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-[#c58f00] text-6xl title-font font-medium mb-1">DRAWINGS</h1>
        <p data-aos="fade-up"
     data-aos-duration="3000" className="leading-relaxed text-gray-300">"Designs, you know it like an art. But  it is a journey. A hard journey on a see defines this. The view you are about to see is marvellous. Feast your eyes as you are about to have the view of your lifetime.  Tap "view" to hop on the ship and dont blink. Ahoy!"</p>
        <div className="flex">
          <Link to='View-More'>
          <button className="flex mt-8 ml-auto text-black font-bold bg-[#c58f00] border-0 py-2 px-6 focus:outline-none hover:bg-[#dcbb5e] rounded">View</button>
        </Link>
        </div>
      </div>
    </div>
  </div>
  {/* <ImageBar/> */}
</section>
    </>
  )
}

export default Work