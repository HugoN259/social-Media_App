import React, { use } from 'react'
import Image from 'next/image';
import { 
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon, 
} from "@heroicons/react/24/outline"
import SidebarUserInfo from './SidebarUserInfo';

export default function Sidebar() {
  
  return (
    <nav className='h-screen hidden sm:flex flex-col sticky top-0 p-3 
    xl:ml-20 xl:mr-10'>
        <div className='relative h-full flex flex-col'>
            <div className='py-3'>
          <Image src={'/assets/sarmy_head.png'} width={48} height={48}
          alt="logo"/>
        </div>
        <ul>
        <SidebarLink Icon={HomeIcon} text="Home"/> 
        <SidebarLink Icon={HashtagIcon} text="Explore"/> 
        <SidebarLink Icon={BellIcon} text="Notifications"/> 
        <SidebarLink Icon={InboxIcon} text="Messages"/> 
        <SidebarLink Icon={BookmarkIcon} text="Saved"/> 
        <SidebarLink Icon={UserIcon} text="Profile"/> 
        <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More"/> 
        <button className='hidden xl:block bg-[#f4af01] w-[200px] h-[52px]
        rounded-full text-white font-medium cursor-pointer shadow-md
        mt-2
        '>
            Squeak
        </button>
        </ul> 
        <SidebarUserInfo />
        </div>
    </nav>
  )
}

interface SidebarLinkProps{
    text: string;
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>

}

function SidebarLink({ text, Icon }: SidebarLinkProps) {
    return <li className='flex items-center text-xl mb-2 space-x-3 p-2.5'>
        <Icon className="h-7"/>
        <span className='hidden xl:block'>{text}</span>
        </li>;
}