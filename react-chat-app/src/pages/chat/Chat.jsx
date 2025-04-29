import React, { useEffect } from 'react'
import { useAppStore } from '../../store'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Chat() {
  const {userInfo}=useAppStore();
  const navigate=useNavigate();
  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast('please setup profile to continue')
      navigate("/profile")
    }
  },[userInfo,navigate])
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
