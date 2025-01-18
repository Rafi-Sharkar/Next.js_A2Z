import { notFound } from 'next/navigation'
import React from 'react'

const page = ({params}) => {
    const {id} = params
    if(id>3){
        notFound();
    }
  return (
    <div>
      <h1 className='mt-2'>The blog id is: {id}</h1>
    </div>
  )
}

export default page


