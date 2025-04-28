import React from 'react'
import { useAppStore } from '../../store'

function Profile() {
  const {userInfo}=useAppStore()
  return (
    <div>
      Profile
      <div>Email:{userInfo.id}</div>
    </div>
  )
}

export default Profile
