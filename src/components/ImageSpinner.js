import React from 'react'
import { Audio, BallTriangle } from  'react-loader-spinner'
import { Typewriter } from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index.css'
const spinner = () => {
  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh]'>
<BallTriangle color=" #c58f00" height={80} width={80} />
<span className='font-extrabold text-5xl italic'>
<Typewriter
  loop
  cursor
  cursorStyle='..'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
  words={['Our Designs...']}
/>
</span>
    </div>
  )
}

export default spinner