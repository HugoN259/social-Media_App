"use client"

import React from 'react'
import SignUpModal from './modals/SignUpModal'
import LogInModal from './modals/LogInModal'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function SignUpPrompt() {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    !username &&

    <div className='fixed w-full h-[80px] bg-[#f4AF01]
    bottom-0 flex justify-center items-center md:space-x-5
    lg:justify-between lg:px-20 xl:px-40 2xl:px-80
    '
    >
        <div className='hidden md:flex flex-col text-white'>
        <span className='text-xl font-bold'>Don't miss out</span>
        <span>Be the first to know</span>
        </div>

        <div className='flex space-x-2 w-full md:w-fit p-3'>
            <LogInModal />
            <SignUpModal />
        </div>

    </div>
  )
}

