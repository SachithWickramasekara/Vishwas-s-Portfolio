import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { data } from './mockData';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Project = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
    <div data-aos="fade-down"
    data-aos-duration="3000">
      <div  className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={50} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] h-[300px] object-contain inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-1000'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={50} />
      </div>
    </div>
    </>
  )
}

export default Project