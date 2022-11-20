import React from 'react'
import { RiVideoAddFill } from 'react-icons/Ri'
import { BiSearch } from 'react-icons/Bi'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2 '>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt/>
                </div>
            </div>
        </div>
        <Contacts src = "https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        name = "Shantanu Singh" 
        status = "Online"
        />
        <Contacts src = "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" 
        name = "Anmol Bhargava" 
        status = "Online"
        />
        <Contacts src = "https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        name = "Viraj Gaggar" 
        status = "Offline"
        />
        <Contacts src = "https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        name = "Aditi Katara" 
        status = "Online"
        />
    </div>
  )
}

export default RightSidebar