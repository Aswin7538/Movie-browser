import React, { useState } from 'react'
import './Movie.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Movie = () => {
    const [title,setTitle]=useState()
    const [data,setData]=useState([''])

    const messi=(event)=>{
        setTitle(event.target.value)

    }
    const cr7=async()=>{
        setTitle(title)
        let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
        console.log(response.data.Search)
        setData(response.data.Search)

    }

  return (
    <div> 
        <div className='search pt-5 '>
        <input type="text" onChange={messi} placeholder='Enter the movie name' className='sr1'  />
        <button onClick={cr7} className='btn1' >Search</button>
        </div>

          <div className=' d-flex  flex-wrap '>
        {data.map((item)=>(
            <>
            <Link to={`/detail/${item.imdbID}`}> <img src={item.Poster} alt="" /></Link>
            
            <h2>{item.Title}</h2>

            </>
        ))}
        </div>
    </div>
  )
}
