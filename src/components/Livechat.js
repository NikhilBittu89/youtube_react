import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomNumber, makeRandomMessage } from '../utils/helper';

const Livechat = () => {
    const [livemessage,setLivemessage]=useState("");
    const dispatch=useDispatch();

    const ChatMessages= useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        const i= setInterval(()=>{
            //api poling
            console.log("Api polling");

            dispatch(
                addMessage({
                    name:generateRandomNumber(),
                    message:makeRandomMessage(10),

            })
          );
        },1500);
        return ()=>clearInterval(i);
    },[]);


  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {
            ChatMessages.map((c,i)=>(
                <ChatMessage key={i} name={c.name} message={c.message} />
            
            ))
        }
        </div>
      </div>

      <form
     className='w-full p-2 ml-2 border border-black'
        onSubmit={(e)=>{
            e.preventDefault();
            console.log("on form submit",livemessage);
            dispatch(
                addMessage({
                    name:"Nikhil",
                    message:livemessage,

                })   
            );
            setLivemessage("");
        }}
        >
        <input
          className='px-2 w-96'
          type='text'
          value={livemessage}
          onChange={(e)=>{
            setLivemessage(e.target.value)
          }
          }
          />
          <button className='px-2 mx-2 bg-green-100'>Send</button>
    
      </form>
    
    </>
  );
};

export default Livechat
