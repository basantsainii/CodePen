import React from 'react'

function Footer() {
  return (
    <>
      <div className='mx-8 py-8 md:flex justify-between flex-wrap gap-5'> 
        <div className="">
            <div className='flex gap-16 sm:block'>
            <ul className='block  sm:flex gap-3 text-white text-[0.8rem]'>
                <li className=''>CodePen</li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/About">About</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Blog">Blog</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/PodCast">PodCast</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Documentation">Documentation</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Support">Support</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Advertise">Advertise</a></li>
            </ul>
            <ul className='block  sm:flex gap-3 text-white text-[0.8rem]'>
                <li className=''>For</li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Teams">Teams</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Education">Education</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Privacy">Privacy</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/Embeds">Embeds</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/AssetHosting">Asset Hosting</a></li>
            </ul>
            </div>
            <div className='flex gap-24 sm:block'>
            <ul className='block  sm:flex gap-3 text-white text-[0.8rem]'>
                <li className=''>Social</li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">YouTube</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">X</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">Instagram</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">Mastodon</a></li>
            </ul>
            <ul className='block  sm:flex gap-3 text-white text-[0.8rem]'>
                <li className=''>Community</li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">Spark</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">Challenges</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">Topics</a></li>
                <li className='text-gray-600 hover:text-gray-300'><a href="/">Code of Conduct</a></li>
            </ul>
            </div>
        </div>
        <div className="text-gray-400 mt-5 md:mt-0">
        <a href="" className="md:hidden fill-white "><svg className='w-10' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"></path></svg><span class="ScreenReaderText-module_root-jASUi">CodePen Home</span></a>
        <a href=""><svg className='w-32 ml-auto hidden md:block ' fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 138 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg></a>
        <div className=' md:text-end text-[0.6rem] md:mt-5'>
        <p>©2024 CodePen</p>
        <p>Demo or it didn't happen</p>
        <p><a href="">Terms of Service</a> . <a href="">Privacy Policy</a></p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
