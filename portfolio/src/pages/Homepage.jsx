import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Home() {
    return (
        <>
            <div className='sm:px-20 p-5 font-raleway text-left sm:mt-5 dark:text-neutral-200 text-neutral-700'>
                <div>
                    <h2 className='sm:text-4xl text-3xl font-[600] mb-2'>
                        About
                    </h2>
                    <p className='dark:text-neutral-200 text-neutral-700'>
                        With expertise in React JS, Javascript, HTML, CSS, Tailwind CSS, Bootstrap and SQL. I craft responsive, dynamic web applications. I deliver seamless user experiences while ensuring robust, scalable backend solutions.
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='sm:text-4xl text-3xl font-[600] mb-2'>
                        Technical Skills
                    </h2>
                    <div className='grid md:grid-cols-6 grid-cols-3 items-center text-center justify-items-start'>
                        <div>
                            <img src="/reactjs.png" alt="" width='150px' className='p-4 mb-2 shadow-lg rounded-xl'/>
                            <p>React JS</p>
                        </div>
                        <div>
                            <img src="/js.png" alt="" width='150px' className='p-4 mb-2 shadow-lg rounded-xl'/>
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src="/html.png" alt="" width='150px' className='p-4 mb-2 shadow-lg rounded-xl'/>
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src="/css.png" alt="" width='150px' className='p-4 mb-2 shadow-lg rounded-xl'/>
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src="/tailwind.png" alt="" width='150px' className='p-4 mb-2 shadow-lg rounded-xl'/>
                            <p className='text-nowrap'>Tailwind CSS</p>
                        </div>
                        <div>
                            <img src="/bootstrap.png" alt="" width='150px' className='p-4 mb-2 shadow-lg rounded-xl'/>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className='grid animate-bounce text-center mt-20 justify-center'>
                    <span class="material-symbols-outlined p-3 text-neutral-500 border rounded-full dark:border-neutral-700 border-neutral-300">
                        keyboard_arrow_down
                    </span>
                </div>
            </div>
        </>
    )
}

export default Home