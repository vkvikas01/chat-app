import React, { Children, useEffect, useState } from 'react'
import {Button} from "../src/components/ui/button"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Index from './pages/auth/Index'
import Chat from './pages/chat/Chat'
import Profile from './pages/profile/Profile'
import { useAppStore } from './store'
import { apiClient } from './lib/api-client'
import { GET_USER_INFO } from './utils/constants'

const PrivateRoute=({children})=>{
  const {userInfo}=useAppStore();
  const isAuthenticated=!!userInfo;
  return isAuthenticated?children:<Navigate to="/auth"/>
}

const AuthRoute=({children})=>{
  const {userInfo}=useAppStore();
  const isAuthenticated=!!userInfo;
  return isAuthenticated?<Navigate to="/chat"/>:children;
}
const App = () => {
  const {userInfo,setUserInfo}=useAppStore();
  const [loading,setLoding]=useState(true)
  useEffect(()=>{
    const getUserdata=async ()=>{
      try {
        const response=await apiClient.get(GET_USER_INFO,{withCredentials:true})
        if(response.status===200 && response.data.id){
          setUserInfo(response.data)
        }else{
          setUserInfo(undefined);
        }
        
      } catch (error) {
        setUserInfo(undefined);
        console.log(error)
      }finally{
        setLoding(false);
      }
    }
    if(!userInfo){
      getUserdata();
    }else{
      setLoding(false);
    }
  },[userInfo,setUserInfo])
  if(loading){
    return <div>loading...</div>
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/auth' element={<AuthRoute><Index/></AuthRoute>}/>
      <Route exact path='/chat' element={<PrivateRoute><Chat/></PrivateRoute>}/>
      <Route exact path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path='*' element={<Navigate to="/auth"/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
