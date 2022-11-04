import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <>
 <section className=" body-font" 
 data-aos="fade-up"
    data-aos-duration="3000">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#d7b65c" className="inline-block w-8 h-8 text-gray-400 mb-8 translate-x-[150px] translate-y-[3mm]" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg> */}
      <h1 className='text-4xl font-bold inline border-b-4 border-[#d7b65c] mb-8'>About</h1>
      <p className="leading-relaxed  mt-8 text-gray-300 text-3xl" data-aos="fade-up"
    data-aos-duration="3000">Hi. I'm Vishwa, nice to meet you.</p>
      <p className='text-gray-300 text-2xl'> Please take a look around.</p>
      <p className='text-gray-300 mt-2'  data-aos="fade-up"
    data-aos-duration="3000">I am passionate about drawing new designs that improves
              the lives of those around me. I specialize in drawing designs
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a designing expert available at your fingertips?</p>  
      <span className="inline-block h-1 w-10 rounded bg-gray-300 mt-8 mb-6"></span>
      <h2 className="text-[#c58f00] font-bold title-font tracking-wider text-sm">Vishwa Bulegodaarachchi</h2>
      <p className="text-[#d7b65c]">Vector Art Designer</p>
    </div>
  </div>
</section>
    </>
  );
};

export default About;