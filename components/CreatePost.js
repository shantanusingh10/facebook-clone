import React from 'react'
import { useSession } from 'next-auth/react';
import { HiOutlineVideoCamera } from 'react-icons/Hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';

const CreatePost = () => {
    
  const {data: session} = useSession();
  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2 '>
        <div className='flex p-4 space-x-2 items-center'>
        <Image src = {session ?.user.image} className = "rounded-full cursor-pointer"
          
          height={40}
          width = {40}
          />
          <form className='flex flex-1'>
            <input type="text"
            className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4'
            placeholder={`What's on your mind,${session.user.name}?`}
            ></input>
            <button hidden></button>
          </form>
        </div>
        <div className='flex justify-evenly py-2'>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                <HiOutlineVideoCamera size={20} className="text-red-500 "/>
                <p className='font-semibold text-gray-600'>Live Video</p>
            </div>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                <IoMdPhotos size={20} className="text-green-500 "/>
                <p className='font-semibold text-gray-600'>Photo/Video</p>
            </div>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                <BsEmojiSmile size={20} className="text-yellow-500 "/>
                <p className='font-semibold text-gray-600'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost