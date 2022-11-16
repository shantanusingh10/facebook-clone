import React from 'react'
import { signIn } from "next-auth/react"
import Image from 'next/image'

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto'>
        <Image src = "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        height={240}
        width = {240}
        />
        <a onClick={signIn} className='px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white '>
            Login
        </a>
    </div>
  )
}

export default Login