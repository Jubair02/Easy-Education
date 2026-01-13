import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 w-full mt-16'>
      
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-8 md:px-12 py-12 
        grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20'>

        {/* Logo & Description */}
        <div className='flex flex-col items-center md:items-start'>
          <img src={assets.logo_dark} alt="EasyEdu logo" className='w-36' />
          <p className='mt-6 text-center md:text-left text-sm text-white/70 leading-relaxed'>
            EasyEdu helps learners grow with industry-ready courses, expert mentors,
            and practical projects designed for real-world success.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col items-center md:items-start'>
          <h2 className='text-white font-semibold text-lg mb-4'>Company</h2>
          <ul className='space-y-2 text-sm text-white/70'>
            <li><a href="#" className='hover:text-white transition'>Home</a></li>
            <li><a href="#" className='hover:text-white transition'>About Us</a></li>
            <li><a href="#" className='hover:text-white transition'>Contact Us</a></li>
            <li><a href="#" className='hover:text-white transition'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col items-center md:items-start'>
          <h2 className='font-semibold text-white text-lg mb-4'>
            Subscribe to our newsletter
          </h2>
          <p className='text-sm text-white/70 mb-4 text-center md:text-left'>
            Get the latest updates, articles, and learning resources every week.
          </p>

          <div className='flex w-full max-w-sm'>
            <input
              type="email"
              placeholder='Enter your email'
              className='flex-1 px-4 py-2 text-sm rounded-l-md 
              bg-gray-800 text-white placeholder:text-white/40 
              focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
              className='px-5 py-2 text-sm font-medium rounded-r-md 
              bg-blue-600 hover:bg-blue-700 transition text-white'
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='py-4 text-center text-xs md:text-sm text-white/60'>
        © 2026 EasyEdu. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer
