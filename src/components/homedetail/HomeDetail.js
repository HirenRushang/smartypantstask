import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import "../home/Home.css"

const Homedetail = () => {


  const params = useParams()
  const extractid = params.homeId
  
  console.log(extractid)


  return (
    <div className='homedetail'>
    <h1>Country Detail</h1>


      <p>City Capital</p>
      <p>{extractid}</p>
    
    </div>
  )
}

export default Homedetail