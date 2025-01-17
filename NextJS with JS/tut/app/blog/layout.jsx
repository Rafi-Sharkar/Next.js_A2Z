import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='my-2 font-[700]'>This is blog page</h1>
      { children }
    </div>
  )
}

export default Layout