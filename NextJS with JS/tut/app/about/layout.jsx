import React, { Children } from 'react'

const AboutLayout = ({children}) => {
  return (
    <div>
      <nav>Mission | Vision</nav>
      <hr/>
      {children}
    </div>
  )
}

export default AboutLayout
