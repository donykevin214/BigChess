import React from 'react'
import { Image, Input, Button } from '../../UI/index.ts'
import Logo from '../../../assets/img/logo_large.png'
import { FaGoogle, FaTwitter } from 'react-icons/fa'
export const LoginModal: React.FC = () =>{
    return (
        <div className="relative w-full h-full bg-white-100 outline-none px-4 py-3">
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='flex justify-center'>
                    <Image source={Logo}/>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <Input placeholder='Email address'/>
                    <Button text='Continue'bg_color='bg-purple-100' text_color='text-white-100'/>
                </div>
                <p className='text-base'>Don't have an account? <span className='text-purple-100 cursor-pointer hover:underline'>Register now</span></p>
                <div className='flex items-center w-full'>
                    <div className='flex h-[1px] bg-gray-400 w-full'></div>
                    <div className='px-2 text-gray-500'>OR</div>
                    <div className='flex h-[1px] bg-gray-400 w-full'></div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <Button text='Continue with Google' icon ={<FaGoogle fill='grey'/>} bg_color='bg-white-100' border='border' text_color='text-black-100' className='inline-flex items-center justify-center'/>
                    <Button text='Continue with Twitter' icon ={<FaTwitter/>} bg_color='bg-blue-100' text_color='text-white-100' className='inline-flex items-center justify-center'/>
                </div>
            </div>
        </div>
    )
}