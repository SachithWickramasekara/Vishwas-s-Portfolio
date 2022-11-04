import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
  return (
    <>
    <div  data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500"  name='skills' className='w-full h-screen  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className=' text-[#c58f00] text-4xl font-bold inline border-b-4 border-[#c0a868] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#c58f00] hover:scale-110 duration-500' data-aos="fade-up"
    data-aos-duration="3000">
                  <img className='w-20 mx-auto' src='.\assets\photoshop.png' alt="Photoshop icon"/>
                  <p className='my-4 text-[#c58f00]'>PhotoShop</p>
              </div>
              <div className='shadow-md shadow-[#c58f00] hover:scale-110 duration-500' data-aos="fade-up"
    data-aos-duration="3000">
                  <img className='w-20 mx-auto' src=".\assets\premiere.png" alt="Premiere icon" />
                  <p className='my-4 text-[#c58f00]'>Premiere</p>
              </div>
              <div className='shadow-md shadow-[#c58f00] hover:scale-110 duration-500' data-aos="fade-up"
    data-aos-duration="3000">
                  <img className='w-20 mx-auto' src=".\assets\illustrator.png" alt="Illustrator icon" />
                  <p className='my-4 text-[#c58f00]'>Illustrator</p>
              </div>
              <div className='shadow-md shadow-[#c58f00] hover:scale-110 duration-500' data-aos="fade-up"
    data-aos-duration="3000">
                  <img className='w-20 mx-auto' src=".\assets\autodesk-3ds-max.png" alt="3d max icon" />
                  <p className='my-4 text-[#c58f00]'>3d max</p>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Skills