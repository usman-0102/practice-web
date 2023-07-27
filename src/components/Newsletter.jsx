import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#0369a1] p-4'>
        <div className='mt-5 max-w-[1240px] md:flex  mx-auto justify-between py-[50px]'>
      <div>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Want to Learn I.T Skills ?</h1>
        <h1 className='text-white text-xl mt-5'>Sign Up to our NewsLetter and Stay Up to date.</h1>
        </div>
        <div className='mt-5'>
            <input type="text" className='p-4 mx-2 text-slate-800 rounded' placeholder='Email' />
            <button className='bg-[rgb(18,96,138)] rounded-xl text-white p-4 '>Get Started</button>
            <br />
            <p className='text-white mt-5'>
                We Care about the Protection of your data Read our <br/>
                <a className='text-black'>Privacy Policy</a>
            </p>
        </div>

        </div> 
        
        
        
        
    </div>
  )
}
