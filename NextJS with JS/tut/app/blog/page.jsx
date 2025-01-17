import React from 'react'
import Link from 'next/link'

const page = () => {
    const blogs=[
        {
            id: 1,
            title: "Blog 1",
            discription: "This is blog one"
        },
        {
            id: 2,
            title: "Blog 2",
            discription: "This is blog two"
        },
        {
            id: 3,
            title: "Blog 3",
            discription: "This is blog three"
        }
    ]
  return (
    <>
        {/* <h1>Rafi Sharkar</h1> */}
      <ul>
        {
            blogs.map((blog)=>(
                <li className='py-1' key={blog.title}>
                    <Link href={`/blog/${blog.id}`}>
                        {blog.title}
                    </Link>
                </li>
            ))
        }
      </ul>
    </>
  )
}

export default page
