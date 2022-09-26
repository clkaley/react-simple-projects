import React from 'react'

function Posts({post}) {
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default Posts