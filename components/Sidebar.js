import React from 'react'
import {ImUsers} from 'react-icons/im'
import Image from 'next/image'
import Sidebaritem from './Sidebaritem'
import {MdGroups, MdOutlineOndemandVideo,MdOutlineExpandMore} from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import {BsStopwatch} from 'react-icons/bs'
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const {data : session} = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[300px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
        <Image src = {session?.user.image}
          height={40}
          width = {40}
          className="rounded-full cursor-pointer"
          />
          <p className='hidden sm:inline-flex font-medium'>
            {session?.user.name}
          </p>
          </div>

          <Sidebaritem Icon={ImUsers} value="Friends"/>
          <Sidebaritem Icon={MdGroups} value="Groups"/>
          <Sidebaritem Icon={AiOutlineShop} value="Marketplace"/>
          <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch"/>
          <Sidebaritem Icon={BsStopwatch} value="Memories"/>
          <Sidebaritem Icon={MdOutlineExpandMore} value="See more"/>
    </div>
  )
}

export default Sidebar