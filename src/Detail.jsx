import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setdata]=useState('')
useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
        console.log(response);
        setdata(response.data)
    }
    fetchdata()
},[])

   
  return (
    <div>
        {data.Title}
        {data.Actors}
        <img src={data.Poster} alt="" />
    </div>
  )
}

export default Detail
