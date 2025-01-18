import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link'
import React from 'react'

const page = async() => {
    const posts = await getAllPosts()
  return (
    <div className='mt-3'>
      <h1>All posts</h1>
      <ul className='mt-4'>
        {posts.map(post=><li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default page
