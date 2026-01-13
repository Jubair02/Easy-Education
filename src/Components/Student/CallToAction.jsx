import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <section className='bg-gray-50'>
      <div className='max-w-5xl mx-auto flex flex-col items-center 
        text-center gap-5 pt-16 pb-24 px-8'>

        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800'>
          Learn anything, anytime, anywhere
        </h1>

        <p className='text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed'>
          Discover flexible, high-quality courses designed to fit your schedule.
          Learn from experts, build real skills, and grow your career at your own pace.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6'>
          <button
            className='px-10 py-3 rounded-md text-white bg-blue-600 
            hover:bg-blue-700 transition font-medium shadow-md'
          >
            Get Started
          </button>

          <button
            className='flex items-center gap-2 text-blue-600 font-medium 
            hover:gap-3 transition'
          >
            Learn more
            <img src={assets.arrow_icon} alt='arrow icon' className='w-4' />
          </button>
        </div>

      </div>
    </section>
  )
}

export default CallToAction
