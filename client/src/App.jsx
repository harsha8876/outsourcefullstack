import './index.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './features/homepage/Homepage'
import Footer from './components/footer/Footer'
import Chat from './chat/Chat'
import Chats from './chats/Chats'
import Add from './features/add/Add'
import Gig from './features/gig/Gig'
import Gigs from './features/gigs/Gigs'
import Login from './features/login/Login'
import Mygigs from './mygigs/Mygigs'
import Orders from './orders/Orders'
import Register from './register/Register'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
function App()
 {
  const queryClient = new QueryClient()

   const Layout=()=>{
    return ( <>
    <QueryClientProvider client={queryClient}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </QueryClientProvider>
    </>)
   }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/> ,
      children:[{
        path:"/",
        element: <Home />
      },
      {
        path:"/gigs",
        element: <Gigs />
      },
      {
        path:"/gig/:id",
        element: <Gig />
      },
      {
        path:"/orders",
        element: <Orders />
      },
      {
        path:"/mygigs",
        element: <Mygigs />
      },
      {
        path:"/add",
        element: <Add />
      },
      {
        path:"/chats",
        element: <Chats />
      },
      {
        path:"/chat/:id",
        element: <Chat />
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      }     
    ]
    },
  ]);

  return (
    <div >
      <RouterProvider router={router} />
    
    </div>
  )
}

export default App;