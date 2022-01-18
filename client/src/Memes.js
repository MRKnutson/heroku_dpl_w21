import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MemeForm from './MemeForm'

const Memes = ()=>{
  const [memes, setMemes]=useState([])

  useEffect(()=>{
    getMemes()
  },[])

  const addMeme =(meme)=>{
    setMemes([meme, ...memes])
  };

  const getMemes = async () =>{
    try{
      let response = await axios.get("/api/memes")
      setMemes(response.data)
    } catch (err) {
      console.log("error getting Memes")
    }
  };

  return(
    <div>
      <h1>Memes</h1>
      <p>{JSON.stringify(memes)}</p>
      <MemeForm addMeme = {addMeme}/>
    </div>
  )
}

export default Memes;