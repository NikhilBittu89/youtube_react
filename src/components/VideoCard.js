import React from 'react'

const VideoCard = ({info}) => {
 
  const title = info?.snippet?.title || 'No Title Available';
  const channelTitle = info?.snippet?.channelTitle || 'No Channel Title Available';
  const viewCount = info?.statistics?.viewCount || 'No View Count Available';
  const thumbnailUrl = info?.snippet?.thumbnails?.medium?.url || '';

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
     <img className='rounded-lg' alt='tumbnail' src={thumbnailUrl}/>
     <ul>
     <li className='font-bold py-2'>{title}</li>
     <li>{channelTitle}</li>
     <li>{viewCount} views</li>

     </ul>
    </div>
  )
}

export default VideoCard
//<img alt='thumbnail' src={info.snippet.thumbnail.medium.url}/>