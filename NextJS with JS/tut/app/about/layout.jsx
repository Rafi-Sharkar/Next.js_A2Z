import React, { Children } from 'react'
import Link from 'next/link'

export const metadata = {
  title: "About Us",
  description: "Keep Learning, Keep Applying  ",
};

const AboutLayout = ({children}) => {
  return (
    <div>
    
      <nav >
      <ul className='flex gap-10 mt-5'>
        <li>
            <Link href='./about/mission'>Mission</Link>
        </li>       
        <li>
            <Link href='./about/vision'>Vision</Link>
        </li>
      </ul>
      </nav>
      <hr/>
      {children}
    </div>
  )
}

export default AboutLayout
