"use client"

import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { signOutUser } from '@/redux/slices/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { closeLogInModal, closeSignUpModal } from '@/redux/slices/modalslice';

export default function SidebarUserInfor() {
  const dispatch: AppDispatch = useDispatch(); 
  const user = useSelector((state: RootState) => state.user)
  
    async function handleSignOut() {
      await signOut(auth)
      
      dispatch(signOutUser())

      dispatch(closeSignUpModal())
      dispatch(closeLogInModal())
    }

  return (
    <div className='absolute bottom-3 flex items-start
            space-x-2 hover:bg-gray-500 hover:bg-opacity-10
            xl:p-3 xl:pe-6 rounded-full transition cursor-pointer
            w-fit xl:w-[240px]
            '
            onClick={handleSignOut} 
            >
              <Image 
              src={'/assets/matthew-blank-profile-photo-1.jpg'}
              width={36}
              height={36}
              alt='profile pic'
              className='w-9 h-9'
              />
    
              <div className='hidden xl:flex flex-col text-sm max-w-40'>
                <span className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>{user.name}</span>
                <span className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-500'>@{user.username}</span>
              </div>
            </div>
  )
}
