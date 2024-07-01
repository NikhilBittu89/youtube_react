import React from 'react';
import "./App.css";
import './index.css'; // Make sure this path is correct
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import store from './utils/store';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  //what chages if give 
  element:<Body/>,
  children:[
    // all the childern go where ever outlet is
    //outlet will always above element type
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])


function App() {
  return (
    <Provider store={store}>
      <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}
export default App;
// <RouterProvider router={appRouter}/>==Body
