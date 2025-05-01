import React, { useEffect } from 'react'
import { useAppStore } from '../../store'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ContactsContainer from './components/contacts-container/ContactsContainer';
import EmptyChatContainer from './components/empty-chat-container/EmptyChatContainer';
import ChatContainer from './components/chat-container/ChatContainer';


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
    <div className='flex h-[100vh] text-white overflow-hidden'>
      <ContactsContainer/>
      {/* <EmptyChatContainer/> */}
      <ChatContainer/>
    </div>
  )
}

export default Chat
