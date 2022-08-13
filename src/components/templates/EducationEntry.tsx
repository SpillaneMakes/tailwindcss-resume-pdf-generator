
import { AcademicCapIcon, CalendarIcon, LocationMarkerIcon } from '@heroicons/react/outline'

interface EducationEntryProps {
  type: string
  degree: string
  minor?: string
  duration: string
  complete: boolean
  university: string
  campus: string
  degreeSpecialization: {
    key: number
    area: string 
  }[]
  featuredCoursework: {
    key: number
    course: string
  }[]
}

export default function EducationEntry ({ education }: { education:EducationEntryProps }) {
  return (
    <div id='layout' className='px-1 pt-1 pb-1'>

      <div id='layout' className='flex items-center justify-between'>
        {/* Degree and Optional Minor Recieved */}
        <div className='flex flex-row items-baseline'>
          <h3 className='text-lg font-bold leading-7 text-black'>
            { education.degree }
          </h3>
          <p className='text-sm font-semibold text-black ml-1'>
            { education.minor && `/ ${ education.minor }`}
          </p>
        </div>
        {/* Duration and Completion Status */}
        <div className='flex items-center text-sm text-gray-800'>
          <CalendarIcon className='flex-shrink-0 mr-1.5 w-4 h-4 text-gray-800' />
          <p>
            { education.duration }
          </p>
          { !education.complete && <p className='italic ml-1'>incomplete</p> }
        </div>
      </div>

      {/* University and Campus */}
      <div id='layout' className='flex justify-between'>
        <p className='flex items-center text-base leading-5 text-black'>
          <AcademicCapIcon className='flex-shrink-0 mr-1.5 w-5 h-5' />
          { education.university }
        </p>
        <p className='flex items-center text-sm leading-5 text-gray-800'>
          <LocationMarkerIcon className='flex-shrink mr-1.5 w-4 h-4' />
          { education.campus }
        </p>
      </div>

      <div className='flex flex-row'>
          {/* Degree Specialization */}
          <div id='layout' className='flex-col w-52'>
            <span className='ml-6 text-sm italic underline'>
              Specialization
            </span>
            <ul className='text-sm ml-6 list-disc'>
              { education.degreeSpecialization.map(( specialization ) => (
                <li key={ specialization.key }>
                  { specialization.area }
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Classwork */}
          <div id='layout' className='flex-col'>
            <ul className='text-sm ml-6 pt-1 list-disc'>
              { education.featuredCoursework.map(( coursework ) => (
                <li key={ coursework.key }>
                  { coursework.course }
                </li>
              ))}
            </ul>
          </div>
        </div>

    </div>
  )
}