import React from 'react'
import { Link } from 'react-router-dom'
const Newnavbar = () => {
  return (
    <>
<header className="text-yellow-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src='./assets/togologo1.png' alt='logo' className='w-[100px] h-auto'/>
      
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
<Link to='Work'>
<a className="mr-5 hover:text-gray-900">Drawings</a>
</Link>
<Link to='About'>
<a className="mr-5 hover:text-gray-900">About me</a>
</Link>
<Link to='Skills'>
<a className="mr-5 hover:text-gray-900">My Skills</a>
</Link>
    </nav>
    <Link to='Contact'>
    <button className="inline-flex items-center text-black bg-yellow-600 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">Contact Me
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>
    </>
  )
}

export default Newnavbar