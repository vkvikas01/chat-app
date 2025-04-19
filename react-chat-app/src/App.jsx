import React from 'react'
import {Button} from "../src/components/ui/button"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Index from './pages/auth/Index'
import Chat from './pages/chat/Chat'
import Profile from './pages/profile/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/auth' element={<Index/>}/>
      <Route exact path='/chat' element={<Chat/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route path='*' element={<Navigate to="/auth"/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
