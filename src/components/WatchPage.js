import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{closeMenu} from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import Livechat from './Livechat';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
  
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col w-full'>
      <div className='flex px-5 w-full '>
         <div className=''>
         <iframe 
           width="1200" 
           height="600" 
           src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
           title="YouTube video player" 
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" 
           allowFullScreen
        ></iframe>
        </div>
        <div className='w-full'>
            <Livechat/>
        </div>
      </div>
         <CommentsContainer/>
    </div>
  );
};

export default WatchPage
