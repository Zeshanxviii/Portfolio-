import React from 'react'

function Home() {
  return (
    <div >
        <div className=" grid grid-cols-custom-3 gap-1 auto-rows-max justify-center pt-[100px] ">
          <div className='mt-[30px]'>
          <h1 className=' text-[40px] font-bold font-firasans text-slate-300'>Hello , I am <span className='transition ease-in-out delay-150 text-slate-200 underline decoration-pink-500 hover:cursor-pointer hover:text-white focus:opacity-40 duration-300'>Zeeshan</span></h1>
          <h2 className='font-poppins text-[20px] text-slate-400'>I am <a href="https://en.wikipedia.org/wiki/Computer_science"><span className='transition-colors delay-150 duration-300 font-poppins  font-semibold border-b-4 border-indigo-500 hover:cursor-pointer hover:text-white hover:border-red-600 '>computer science student</span> </a>learning tech stack</h2>
           {/* About me  */}
           <br />
           <p className='font-poppins text-[20px] text-slate-400'>
              I'm skilled in ReactJs and NodeJs, and I'm always looking for new challenges and opportunities to grow as a developer. I'm a quick learner and I'm excited to work with people who value my skills and passion for technology.
              <br />
              <br />
              Let's connect and work together to create amazing things!
            </p>
          </div>
          <div className=' '>
          <img className='w-{300px} h-[300px] md:rounded-n rounded-full mx-auto' src={"/profile.jpeg"} alt="not found" />
          </div>
          <div>
           
          </div>
        </div>
    </div>
  )
} 

export default Home