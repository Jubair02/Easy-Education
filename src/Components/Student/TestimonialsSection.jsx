import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <section className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-8'>

        {/* Heading */}
        <div className='text-center'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
            What our learners say
          </h2>
          <p className='mt-3 text-gray-500 max-w-2xl mx-auto'>
            Hear from our learners as they share their journeys of transformation,
            success, and how our platform has made a difference in their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-xl
              shadow-md hover:shadow-xl hover:-translate-y-1
              transition-all duration-300 overflow-hidden'
            >
              {/* Header */}
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-50'>
                <img
                  className='h-12 w-12 rounded-full object-cover'
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className='text-base font-medium text-gray-800'>
                    {testimonial.name}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className='p-5'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className='h-4'
                      src={i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank}
                      alt='star'
                    />
                  ))}
                </div>

                <p className='text-gray-500 mt-4 text-sm leading-relaxed'>
                  {testimonial.feedback}
                </p>

                <a
                  href="#"
                  className='inline-block mt-4 text-sm font-medium
                  text-blue-600 hover:underline'
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
