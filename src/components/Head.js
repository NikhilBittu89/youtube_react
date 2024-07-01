import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '@testing-library/user-event/dist/clear';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import store from '../utils/store';
import { cacheResult } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery,setSearchQuery]=useState("");

  const [suggestions,setSuggestions]=useState([]);

  const [showSuggestions,setshowSuggestions]=useState(false);

  const searchCache=useSelector((store)=>store.search);
  console.log(searchQuery);

  /**
   * searchCache ={
   *    "iphone:[iphone 11,ipohne14]"
   *}
   * searchQuery=iphone
   * 
   */
  useEffect(()=>{
    
    const timer =setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      } 
    },200);
    return ()=>{
      clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json =await data.json();
    console.log(json);
    setSuggestions(json[1]);
    
    dispatch(
      cacheResult({
        [searchQuery]:json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };
  return (
    <div className='grid  grid-flow-col shadow-lg p-5 m-2'>
      <div className='flex col-span-1'>
      <img onClick={()=>toggleMenuHandler()}
           className='h-8 cursor-pointer'
           alt='memu' src='https://th.bing.com/th/id/OIP.qsUUfXbfwf5jdPYV-4UHvwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>

        <a href="/">
        <img 
            className='h-8 mx-2 '
            alt='youtube-icon'
             src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png'
        />
        </a>
      </div>
      <div className='col-span-10 px-10 ml-20'>
        <div>
        <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setshowSuggestions(true)}
        onBlur={()=>setshowSuggestions(false)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 px-5 py-2'>"*+"</button>
        </div>
        {showSuggestions && (
        <div className='absoult bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg'>
        <ul>
          {suggestions.map((s)=>(
          <li  key={s} className=' py-1 shadow-sm hover:bg-gray-100'>{s}</li> 
          ))}
        </ul>
        </div>
        )}
      </div>
      <div className='col-span-1'>
        <img className='h-8'
            alt='user-icon'
            src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0'
        />
      </div>
    </div>

  );
}

export default Head
