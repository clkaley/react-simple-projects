import React from 'react'

const SearchBar = ({posts,setSearchResults}) => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleSearchChange=(e)=>{
        if(!e.target.value) return setSearchResults(posts)

        const resultsArray=posts.filter(post=>post.title.includes(e.target.value) || post.body.includes(e.target.value))
        setSearchResults(resultsArray)
    }

  return (
    <div>
        <h1 style={{textAlign:"center",color:"red"}}>Search Bar</h1>

        <form style={{textAlign:"center"}} action=""
        onSubmit={handleSubmit}>
            <input style={{padding:"10px"}} type="text"
             onChange={handleSearchChange}/>
             <button style={{padding:"10px",cursor:"pointer"}}>
                Submit
             </button>
        </form>
    </div>
  )
}

export default SearchBar