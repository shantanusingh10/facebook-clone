import React from 'react'
import Image from 'next/image'
import {FiThumbsUp } from 'react-icons/fi'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'

const Post = () => {
  return (
    <div className='flex flex-col '>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center space-x-2'>
                <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032" 
                className='rounded-full h-10 w-10'
                width={10}
                height = {10}
                />
                <div>
                    <p className='font-medium'>Shantanu Singh</p>
                    <p className='text-xs text-gray-500'>{new Date().getTime().toLocaleString}</p>
                </div>
            </div>
            <p className='py-4 '>lorem ipsum</p>
        </div>
        {/* If any image */}
        <div className='relative h-60 md:h-96 bg-white'>
            <Image src = "https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            layout="fill"
            objectFit='cover' 
            />
        </div>
        {/* Footer */}
        <div className='flex items-center justify-center bg-white p-2'>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <FiThumbsUp className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <FaRegCommentAlt className='h-4'/>
                <p className='text-xs sm:text-base'>Comment</p>
            </div>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <RiShareForwardLine className='h-4'/>
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post