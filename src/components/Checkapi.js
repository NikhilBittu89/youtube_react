

import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constant';

const Checkapi = () => {
    useEffect(()=>{
      getVideos();
    },[]);
  
    const getVideos=async ()=>{
      const data= await fetch(YOUTUBE_SEARCH_API);
      const json = await data.json();
      
    };
  
  
    return (
      <div>
        Videocontainer
      </div>
    )
  }
  
  export default Checkapi
  