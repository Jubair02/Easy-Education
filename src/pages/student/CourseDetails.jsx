import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/Student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../Components/Student/Footer'

const CourseDetails = () => {
  const { id } = useParams()
  const {
    allCourses,
    calcultateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,currency
  } = useContext(AppContext)

  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})

  const [isAlreadyEnrooled, setIsAlreadyEnrooled] = useState(false)

  useEffect(() => {
    if (allCourses?.length) {
      const findCourse = allCourses.find(course => course._id === id)
      setCourseData(findCourse || null)
    }
  }, [id, allCourses])

  if (!courseData) return <Loading />

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section className="relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[var(--spacing-section-height)] bg-gradient-to-b from-cyan-100/70 to-transparent -z-10" />

      <div className="flex flex-col-reverse md:flex-row gap-10 max-w-7xl mx-auto px-8 md:px-36 pt-20">
        {/* Left column */}
        <div className="flex-1">
          <h1 className="text-course-details-heading-small md:text-course-details-heading-large font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>

          <p
            className="mt-4 text-gray-600 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription?.slice(0, 200) + '...',
            }}
          />

          {/* Review and raings */}
          <div className="flex items-center space-x-2 mt-4">
            <p>{calcultateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calcultateRating(courseData) || 0)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>

            <p className="text-gray-500">
              ({courseData.courseRatings?.length || 0}{' '}
              {(courseData.courseRatings?.length || 0) > 1 ? 'ratings' : 'rating'})
            </p>

            <p>
              {courseData.enrolledStudents?.length || 0}{' '}
              {(courseData.enrolledStudents?.length || 0) > 1 ? 'students' : 'student'}
            </p>
          </div>

          <p className="text-sm mt-2">
            Course by <span className="text-blue-600 underline">5 Minute School</span>
          </p>

          {/* Course Structure */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Course Structure</h2>

            <div className="flex flex-col gap-2">
              {courseData.courseContent?.length ? (
                courseData.courseContent.map((chapter, index) => (
                  <div key={index} className="border rounded hover:bg-gray-50">
                    {/* Chapter header */}
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-2">
                        <img src={assets.down_arrow_icon} alt="icon" className="w-4 h-4" />
                        <p className="text-gray-700 font-medium">{chapter.chapterTitle}</p>
                      </div>
                      <div className="text-gray-500 text-sm">
                        {chapter.chapterContent?.length || 0} lectures - {calculateChapterTime(chapter)}
                      </div>
                    </div>

                    {/* Chapter content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections[index] ? 'max-h-[2000px] py-2' : 'max-h-0'
                      }`}
                    >
                      <ul className="pl-6">
                        {chapter.chapterContent?.map((lecture, i) => (
                          <li key={i} className="flex items-center gap-2 py-1">
                            <img src={assets.play_icon} alt="play icon" className="w-4 h-4 mt-1" />
                            <div className="flex flex-col">
                              <p>{lecture.lectureTitle}</p>
                              <div className="flex gap-2 text-sm">
                                {lecture.isPreviewFree && (
                                  <p className="text-blue-500 cursor-pointer">Preview</p>
                                )}
                                <p>
                                  {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                                    units: ['h', 'm'],
                                  })}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )) ) : (
                <p className="text-gray-500">No chapters available</p>
              )}
            </div>
          </div>


          <div>
            <h3>Course Description</h3>
             <p
            className="mt-3 "
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription?.slice(0, 200) + '...',
            }}
          />
          </div>
        </div>

        {/* right column */}

        <div>
          <img src={courseData.courseThumbnail} alt="" />
          <div className='pt-5'>
            <div>
              <img src={assets.time_left_clock_icon} alt="time left clock icon" />
              <p className='text-red-500'> <span className='font-medium'> 5 days</span>left at this price!t</p>

            </div>
            <div>
            <p>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice /100).toFixed(2)}</p>

            <p>{currency} {courseData.courseprice}</p>
            <p>{courseData.discount} % off</p>
            </div>
            
            <div className='flex items-center text-sm md:text-default gap-4 pt-2
            md:pt-4 text-gray-500'>
              <div>
                <img src={assets.star} alt="star icon " />
                <p>{calcultateRating(courseData)}</p>
              </div>
              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.time_clock_icon} alt="clock icon" />
                <p>{calculateCourseDuration(courseData)}</p>

              </div>

              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.lesson_icon} alt="lesson icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>

              </div>
              

            </div>

            <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600
            text-white font-medium'>{isAlreadyEnrooled ? 'Already Enrolled ' : 'Enroll Now'}</button>

            <div>
              <p>What's in the course?  </p>
              <ul>
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default CourseDetails
