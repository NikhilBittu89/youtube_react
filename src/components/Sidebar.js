import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen);

  //early return
  if(!isMenuOpen)return null;

  //return !isMenuopen?null:(
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>
            <Link to="/">
            Home
            </Link>
        </li>
        <li>Shorts</li>
        <li>videos </li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming </li>
        <li>sports</li>
      </ul>
      <h1 className='font-bold pt-5'>WatchLater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming </li>
        <li>sports</li>
      </ul>
    </div>
  )
}

export default Sidebar
