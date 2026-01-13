import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full 
    pt-20 md:pt-32 px-7 md:px-0 space-y-7 text-center 
    bg-gradient-to-b from-cyan-100/70 to-white">

      <h1 className="text-home-heading-small md:text-home-heading-large 
      font-bold text-gray-800 relative max-w-3xl mx-auto">

        Empower your future with the courses designed to{" "}
        <span className="text-blue-600">fit your choice.</span>

        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-7 right-0"
        />
      </h1>

      <p className="hidden md:block text-gray-500 max-w-2xl mx-auto">
        We bring together world-class instructors, interactive content,
        and a supportive community to help you achieve your personal
        and professional goals.
      </p>

      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        We bring together world-class instructors, interactive content,
        and a supportive community to help you achieve your goals.
      </p>

      <SearchBar />
    </div>
  )
}

export default Hero
