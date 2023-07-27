import React from 'react'
import laptop from "../assets/laptop.jpg"
export default function () {
  return (
    <div className='max-w-[1240px] mx-auto border-black p-2 md:grid grid-cols-2'>
     <div className=' mx-auto col-span-1 w-[80%]'>
        <img  src={laptop} alt="" />
     </div>
      <div className='col-span-1 mx-auto justify-center flex flex-col' >
        <h1 className='text-[#00df9a] font-bold my-4 text-xl'>Learn From Experts</h1>
        <p className='my-2'>
        Greetings! I am ChatGPT, an advanced AI language model designed to provide you with
        insightful and informative conversations. With my extensive training on diverse texts,
         I can assist you in various domains, including answering questions, offering writing suggestions,
          generating creative ideas, and engaging in meaningful discussions. I'm constantly learning and adapting 
          to improve the quality of our interactions, so feel free to explore any topic or seek assistance. 
          Let's embark on an exciting journey of knowledge and exploration!
        </p>
        <button className='w-[30%] mt-3 bg-[rgb(18,96,138)] rounded text-white p-3 '>Get Started</button>
      </div>


    </div>
  )
}
