
import { LocationMarkerIcon, CalendarIcon, BriefcaseIcon } from '@heroicons/react/outline'

interface ExperienceEntryProps {
  key: number
  title: string
  duration: string
  employer: string
  location: string
  details: {
    bulletPoint: number
    entry: string
  }[]
}

export default function ExperienceEntry ({ experience }:{ experience:ExperienceEntryProps }) {
  return (
    <div className='px-1 pt-1 pb-1'>

      {/* Position Title and Duration */}
      <div id='layout' className='flex items-center justify-between'>
        <h3 className='text-lg font-bold leading-7 text-black'>
          { experience.title }
        </h3>
        <div className='flex items-center text-sm text-gray-800'>
          <CalendarIcon className='flex-shrink-0 mr-1.5 w-4 h-4' />
          <p>
            { experience.duration }
          </p>
        </div>
      </div>

      {/* Employer and Location */}
      <div id='layout' className='flex justify-between'>
        <p className='flex items-center text-base leading-5 text-black'>
          <BriefcaseIcon className='flex-shrink-0 mr-1.5 h-5 w-5' />
          { experience.employer }
        </p>
        <p className='flex items-center text-sm leading-5 text-gray-800'>
          <LocationMarkerIcon className='flex-shrink-0 mr-1.5 h-4 w-4' />
          { experience.location }
        </p>
      </div>

      {/* Featured Details of Experience */}
      <ul id='layout' className='ml-6 mt-0.5 text-sm list-disc'>
        { experience.details.map(( detail ) => (
          <li key={ detail.bulletPoint }>
            { detail.entry }
          </li>
        ))}
      </ul>

    </div>
  )
}