import { EllipsisHorizontalCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Image from 'next/image'

export default function Widgets() {
  return (
    <div className='p-3 hidden lg:flex flex-col space-y-4
    w-[400px] ps-10'>

      <div className='bg-[#EFF3F4]
      text-[#89959D] h-[44px]
      flex items-center space-x-3
      rounded-full pl-5
      '>
        <MagnifyingGlassIcon
          className='w-[20px] h-[20px]'
        />
        <input type='text'
        placeholder='search squeakers'
        className='bg-transparent outline-none'
        />

      </div>

      <div className='bg-[#EFF3F4]
      rounded-xl p-3'>
        <h1 className='text-xl
        font-bold mb-2'>
          Whats happening?
        </h1>

        <div className='flex flex-col text-sm py-3 space-y-0.5'>
          <div className='flex justify-between
          text-[#536471]
          text-[13px]'>
            <span>
              Trending in US
            </span>
            <EllipsisHorizontalCircleIcon 
            className='w-[20px]'/>

          </div>
          <span className='font-bold text-sm'>#ReactJS</span>

          <span className='text-[#536471]
          text-xs
          '>100k squaks</span>
        </div>

        <div className='flex flex-col text-sm py-3 space-y-0.5'>
          <div className='flex justify-between
          text-[#536471]
          text-[13px]'>
            <span>
              Trending in US
            </span>
            <EllipsisHorizontalCircleIcon 
            className='w-[20px]'/>

          </div>
          <span className='font-bold text-sm'>#ReactJS</span>

          <span className='text-[#536471]
          text-xs
          '>100k squaks</span>
        </div>

        <div className='flex flex-col text-sm py-3 space-y-0.5'>
          <div className='flex justify-between
          text-[#536471]
          text-[13px]'>
            <span>
              Trending in US
            </span>
            <EllipsisHorizontalCircleIcon 
            className='w-[20px]'/>

          </div>
          <span className='font-bold text-sm'>#ReactJS</span>

          <span className='text-[#536471]
          text-xs
          '>100k squaks</span>
        </div>

        <div className='flex flex-col text-sm py-3 space-y-0.5'>
          <div className='flex justify-between
          text-[#536471]
          text-[13px]'>
            <span>
              Trending in US
            </span>
            <EllipsisHorizontalCircleIcon 
            className='w-[20px]'/>

          </div>
          <span className='font-bold text-sm'>#ReactJS</span>

          <span className='text-[#536471]
          text-xs
          '>100k squaks</span>
        </div>

      </div>

    <div className='bg-[#EFF3F4]
      rounded-xl p-3'>
        <h1 className='text-xl font-bold mb-2'>
          Who to Follow
        </h1>

        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center space-x-3'>
            <Image 
            src={'/assets/Espn-Logo.png'}
            width={56}
            height={56}
            alt="Profile pic"
            className='w-11 h-11
            rounded-full'
            />

            <div className='flex flex-col text-sm'>
              <span className='font-bold'>ESPN</span>
              <span>@ESPN</span>
            </div>
            </div>
            <button 
            className='bg-[#0f1419] text-white w-[72px]
            h-[40px] rounded-full text-sm'
            >Follow</button>
          

        </div>
        
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center space-x-3'>
            <Image 
            src={'/assets/Markiplier.jpg'}
            width={56}
            height={56}
            alt="Profile pic"
            className='w-11 h-11
            rounded-full'
            />

            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Markiplier</span>
              <span>@Markiplier</span>
            </div>
            </div>
            <button 
            className='bg-[#0f1419] text-white w-[72px]
            h-[40px] rounded-full text-sm'
            >Follow</button>
          

        </div>
        
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center space-x-3'>
            <Image 
            src={'/assets/Toby_fox.png'}
            width={56}
            height={56}
            alt="Profile pic"
            className='w-11 h-11
            rounded-full'
            />

            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Toby Fox</span>
              <span>@TobyFox</span>
            </div>
            </div>
            <button 
            className='bg-[#0f1419] text-white w-[72px]
            h-[40px] rounded-full text-sm'
            >Follow</button>
          

        </div>

    </div>

    </div>
  )
}
