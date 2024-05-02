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
import Pay from './features/pay/Pay'
import Success from './features/success/Success'
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
import Blog from './features/blog/Blog'
import Post from './features/blog/Post'
import PrivacyPolicy from './components/about/PrivacyPolicy'
import Termsofser from './components/about/Termsofser'
import Support from './components/support/Support'
import ContactUs from './components/support/ContactUs'
import SocialHub from './components/community/SocialHub'
import Faqs from './components/about/Faqs'
import Purpose from './components/about/Purpose'
import Working from './components/about/Working'
import ResetPassword from './Forgotpass/ResetPassword'
import ForgotPassword from './Forgotpass/ForgotPassword'
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
      },
      {
        path: "/pay/:id",
        element: <Pay />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path:"/blog",
        element : <Blog/>
      },
      {
        path:"/post/:id",
        element : <Post/>
      },
      {
        path:"/privacypolicy",
        element : <PrivacyPolicy/>
      },
      {
        path : "/terms&service",
        element:<Termsofser/>
      },
      {
        path : "/support",
        element:<Support/>
      },
      {
        path : "/contactus",
        element:<ContactUs/>
      },
      {
        path : "/social",
        element:<SocialHub/>
      },
      {
        path : "/faqs",
        element:<Faqs/>
      },
      {
        path : "/purpose",
        element:<Purpose/>
      },
      {
        path : "/working",
        element:<Working/>
      },{
        path: "/forgotpassword",
        element: <ForgotPassword />
      },
      {
        path: "/resetpassword/:token", // Updated path with ":token" parameter
        element: <ResetPassword /> 
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