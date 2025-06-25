'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpTrayIcon, ChartBarIcon, 
    ChatBubbleOvalLeftEllipsisIcon, HeartIcon } 
    from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { arrayRemove, arrayUnion, doc, DocumentData, Timestamp, updateDoc } from 'firebase/firestore';
import Moment from 'react-moment';
import { openCommentModal, openLogInModal, setCommentDetails } from '@/redux/slices/modalslice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { db } from '@/firebase';

interface PostProps {
    data: DocumentData;
    id: string;
}

export default function Post({data, id}: PostProps) {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user)

    async function likePost() {

        if(!user.username) {
            dispatch(openLogInModal())
            return;
        }
        const postref = doc(db, "posts", id)

        if(data.likes.includes(user.uid)){
            await updateDoc(postref, {
                likes: arrayRemove(user.uid)
            })
        } else {
        await updateDoc(postref, {
            likes: arrayUnion(user.uid)
        })
        }
    }

  return (
    <div className='border-b border-gray-100'>
        <Link href={"/"+id}>
        <PostHeader 
            username={data.username}
            name={data.name}
            timestamp={data.timestamp}
            text={data.text}
        />
        </Link>

        <div className='ml-16 p-3 flex space-x-14'>
            <div className='relative'>
                <ChatBubbleOvalLeftEllipsisIcon
                className='w-[22px] h-[22px] cursor-pointer
                hover:text-[#f4af01] transition' 
                 onClick={() => {

                    if(!user.username) {
                        dispatch(openLogInModal())
                        return;
                    }
                    dispatch(setCommentDetails({
                        name: data.name,
                        username: data.username,
                        id: id,
                        text: data.text,
                    }))
                    dispatch(openCommentModal())
                 }}
                />
                {
                    data.comments.length > 0 &&
                <span className='absolute text-xs top-1 -right-3'>
                    {data.comments.length}
                </span>
                }
            </div>
            <div className='relative'>
                {
                    data.likes.includes(user.uid) ?
                <HeartSolidIcon
                className='w-[22px] h-[22px] cursor-pointer
                text-pink-500 transition' 
                onClick={() => likePost()}
                /> : <HeartIcon
                className='w-[22px] h-[22px] cursor-pointer
                hover:text-pink-500 transition' 
                onClick={() => likePost()}
                />
                }

                { data.likes.length > 0 &&
                <span className='absolute text-xs top-1 -right-3'>
                    {data.likes.length}
                </span>
                }
            </div>
            <div className='relative'>
                <ChartBarIcon
                className='w-[22px] h-[22px] 
                cursor-not-allowed' 
                />
            </div>
            <div className='relative'>
                <ArrowUpTrayIcon
                className='w-[22px] h-[22px] 
                cursor-not-allowed' 
                />
            </div>
        </div>
    </div>
  )
}

interface PostHeaderProps {
    username: string;
    name: string;
    timestamp?: Timestamp;
    text: string;
    replyTo?: string;
}

export function PostHeader({username, name, timestamp, text, replyTo}: PostHeaderProps) {
    return (
        <div className='flex p-3 space-x-5'>
            <Image src={"/assets/matthew-blank-profile-photo-1.jpg"}
            width={44}
            height={44}
            alt='Profile Pic'
            className='w-11 h-11 z-10'
            />

        <div className='text-[15px] flex flex-col space-y-1.5'>
            <div className='flex space-x-1.5 text-[15px] text-[#707E89]'>
                <span className='font-bold text-[#0f1419]
                inline-block whitespace-nowrap overflow-hidden text-ellipsis
                max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w[140px]
                sm:max-w-[160px]
                '>
                    {name}
                    </span>
                <span
                className='inline-block whitespace-nowrap overflow-hidden text-ellipsis
                max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w[140px]
                sm:max-w-[160px]
                '>@{username}</span>
                {timestamp && (
                    <>
                    <span>·</span>
                    <Moment fromNow>{timestamp.toDate()}</Moment>
                    </>
                )}
            </div>

                <span>{text}</span>

                {replyTo && (
                <span className='text-[15px] text-[#707E89]'>
                    Replying to <span className='text-[#F4Af01]'>@{replyTo}</span>
                </span>
                )}
            </div>
        </div>
    )
}

function OpenLogInModal(): any {
    throw new Error('Function not implemented.')
}
