import React from 'react'
import Posts from './Posts'

function ListPage({searchResults}) {
    const results=searchResults.map(post=><Posts key={post.id} post={post}/> )
    const content=results?.length ? results:<div>
        No Matching
    </div>
  return (
    <div>
        <div>{content}</div>
    </div>
  )
}

export default ListPage