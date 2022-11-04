import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
const Socialicons =()=>{
  return (
    <div>
        <div className='hidden lg:flex fixed flex-col top-[25%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/sachith-wickramasekara-302238201/'
            >
             <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/SachithWickramasekara?tab=repositories'
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:sachithwickramasekara@gmail.com'
            >
            <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#4684cc] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/sachith.wickramasekara/'
            >
             <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#c86537] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
             <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-[50px]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
               <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Socialicons;