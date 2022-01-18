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
      <div>
        {memes.map(m=>{
          return(
            <div style ={{width: "300px", height: "300px", margin: "20px"}}>
              <h3>{m.title}</h3>
              <img src = {m.image_url} height="200px" width="230px"/>
            </div>
          )
        })}
      </div>
      {/* <p>{JSON.stringify(memes)}</p> */}
      <MemeForm addMeme = {addMeme}/>
    </div>
  )
}

export default Memes;