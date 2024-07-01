import { comment } from 'postcss';
import React from 'react'
//94 comments.map((comment, index)=> <Comment key={index} data={comment}/>);

const CommentsData=[
    {
        name:"akshay saini1",
        text:"loraem ipsum dolar sit amet, conssetete adip",
        replies:[

        ],
    },
    {
        name:"akshay saini2",
        text:"loraem ipsum dolar sit amet, conssetete adip",
        replies:[
            {
                name:"akshay saini2.1",
                text:"loraem ipsum dolar sit amet, conssetete adip",
                replies:[
                    {
                        name:"akshay saini 2.1.1",
                        text:"loraem ipsum dolar sit amet, conssetete adip",
                        replies:[
                
                        ],
                    },
                    {
                        name:"akshay saini 2.1.2",
                        text:"loraem ipsum dolar sit amet, conssetete adip",
                        replies:[
                            {
                                name:"akshay saini",
                                text:"loraem ipsum dolar sit amet, conssetete adip",
                                replies:[
                        
                                ]
                            },
                            {
                                name:"akshay saini",
                                text:"loraem ipsum dolar sit amet, conssetete adip",
                                replies:[
                        
                                ]
                            },
                            {
                                name:"akshay saini",
                                text:"loraem ipsum dolar sit amet, conssetete adip",
                                replies:[
                        
                                ]
                            },
                        ]
                    },
                ],
            },
        ]
    },
    {
        name:"akshay saini3",
        text:"loraem ipsum dolar sit amet, conssetete adip",
        replies:[
            {
                name:"akshay saini4",
                text:"loraem ipsum dolar sit amet, conssetete adip",
                replies:[
                    {
                        name:"akshay saini4",
                        text:"loraem ipsum dolar sit amet, conssetete adip",
                        replies:[
                
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"akshay saini4",
        text:"loraem ipsum dolar sit amet, conssetete adip",
        replies:[

        ],
    },
   
];

const Comment=({data})=>{
    const{name,text,replies}=data;
    return <div className='flex shadow-sm bg-gray-50 p-2 my-2'>
        <div>
        <img 
        className='w-8, h-8'
          alt='user'
          src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0'
          />
        </div>
        <div className='px-3'>
            <p className='text-2xl font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsList=({comments})=>{
    return comments.map((comment, index)=> (
        <div>
             <Comment key={index} data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ));
};
function CommentsContainer() {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentsList comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer
