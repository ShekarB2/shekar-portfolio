import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="https://www.linkedin.com/in/2shekar">
                    <i class="ri-linkedin-box-line text-gray-400 text-xl"></i>
                    </a>
                    <a href="mailto:shekarb0622@gmail.com">
                    <i class="ri-mail-send-line text-gray-400 text-xl"></i>
                    </a>
                    <i class="ri-github-line text-gray-400 text-xl"></i>
                    <i class="ri-facebook-circle-line text-gray-400 text-xl"></i>
                    <i class="ri-instagram-line text-gray-400 text-xl"></i>
                </div>
                <div className='w-[1px] h-32 bg-[#1666a37f] sm:hidden'>

                </div>
            </div>
        </div>
    )
}

export default LeftSider
