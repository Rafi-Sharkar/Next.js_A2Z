import Button from '@/app/components/Button';   // here @ is the root diractory
import Image from 'next/image';
import RS7 from '@/public/images/Rafi_Sharkar07.jpg'
import React from 'react'

const page = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse corrupti fugit quisquam? Exercitationem, non esse quae veniam qui deserunt?</p>
      <Image src={RS7} alt='Image not found' placeholder='blur'/>
      <Button/>
    </div>
  )
}

export default page
