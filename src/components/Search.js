import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const[searchText,setSearchText]=useState('')

    const handleChange=(e)=>{
        setSearchText(e.target.value)
    }

    useEffect(()=>{
        props.SearchValue(searchText)
    },[searchText])

  return (
    <div style={{textAlign:'center'}} >
        <input type='text' value={searchText} placeholder='Search' onChange={handleChange}></input>
    </div>
  )
}

export default Search