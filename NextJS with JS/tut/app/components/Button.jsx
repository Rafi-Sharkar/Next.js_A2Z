"use client";

import React from 'react'

const Button = () => {
  return (
    <div>
        <button 
        className='mt-3 px-2 py-1 border-2 border-black hover:bg-black hover:text-white duration-300' onClick={()=>console.log("I have clicked here!")}
        >
            Learn more
        </button>
    </div>
  )
}

export default Button
