import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";

function Footer() {
    return (
        <>
            <div className='md:px-40 px-5 py-10 md:text-left text-center font-inter dark:text-neutral-300 text-[#343434] flex md:flex-row flex-col items-center gap-5'>
                <p className='text-sm'>Designed in Figma. Coded in Visual Studio Code. Built with React JS and Tailwind CSS. Deployed with Vercel.</p>
                <div className='flex gap-2'>
                    <div className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'>
                        <FaLinkedinIn className='text-lg text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] ' />
                    </div>
                    <div className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'>
                        <FaGithub className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-lg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
