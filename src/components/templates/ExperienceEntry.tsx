
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
    <div className='px-1 pb-1'>

      {/* Position Title and Duration */}
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-bold leading-7 text-black'>
          { experience.title }
        </h3>
        <div className='flex items-center text-sm text-gray-900'>
          <CalendarIcon className='flex-shrink-0 mr-1.5 w-4 h-4' />
          <p>
            { experience.duration }
          </p>
        </div>
      </div>

      {/* Employer and Location */}
      <div className='flex justify-between'>
        <p className='flex items-center text-sm text-gray-900'>
          <BriefcaseIcon className='flex-shrink-0 mr-1.5 h-4 w-4 text-gray-700' />
          { experience.employer }
        </p>
        <p className='flex items-center text-sm text-gray-900'>
          <LocationMarkerIcon className='flex-shrink-0 mr-1.5 h-4 w-4 text-gray-700' />
          { experience.location }
        </p>
      </div>

      {/* Featured Details of Experience */}
      <ul className='ml-6 text-sm list-disc'>
        { experience.details.map(( detail ) => (
          <li key={ detail.bulletPoint }>
            { detail.entry }
          </li>
        ))}
      </ul>

    </div>
  )
}