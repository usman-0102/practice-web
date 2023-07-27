import React from 'react'
import {AiOutlineCheck} from "react-icons/ai"

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-32'>
        <div className='w-full h-[800px] bg-[#0369a1] absolute mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-100'>
                <h2 className='text-3xl'>Pricing Plans</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                <p className='text-3xl'>Pricing is an integral and multifaceted element of any
                     successful business strategy. It holds the power to
                     influence customer perceptions, drive demand, 
                    and ultimately impact a company's bottom line.
                </p>
            </div>
           <div className='grid md:grid-cols-2'>
            <div className='bg-white m-4 p-8 rounded-xl shadow-2xl relative text-slate-900 hover:scale-110 duration-150'>
               <span className='uppercase px-3 py-1 rounded-2xl font-bold text-sm bg-blue-200 text-blue-900'>Standard</span> 
            <div>
                <p className='flex font-bold text-4xl py-4 '>$49<span className='text-gray-600 pt-3 text-xl'>/mo</span></p>
            </div>
            <p className='text-2xl py-8'>This is the Standard and the most cheap Package to buy to seek knowledge for Web Development</p>
            <div className='relative text-xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='  w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl'  /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                 <button className='bg-blue-600 py-4 my-4 w-full font-bold text-white rounded-xl' >Get Started</button>
            </div>
            </div>

            <div className='bg-white m-4 p-8 rounded-xl shadow-2xl relative text-slate-900 hover:scale-110 duration-150'>
               <span className='uppercase px-3 py-1 rounded-2xl font-bold text-sm bg-blue-200 text-blue-900'>Premium</span> 
            <div>
                <p className='flex font-bold text-4xl py-4 '>$99<span className='text-gray-600 pt-3 text-xl'>/mo</span></p>
            </div>
            <p className='text-2xl py-8'>This is the Standard and the most cheap Package to buy to seek knowledge for Web Development</p>
            <div className='relative text-xl'>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='  w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl'  /> Component Based</p>
                <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-800 text-2xl' /> Component Based</p>
                 <button className='bg-blue-600 py-4 my-4 w-full font-bold text-white rounded-xl' >Get Started</button>
            </div>
            </div>




           </div>


        </div>
    </div>
  )
}

export default Pricing