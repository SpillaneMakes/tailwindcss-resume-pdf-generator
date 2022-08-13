
import Image from 'next/image'

import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { LinkIcon } from '@heroicons/react/solid'

interface ProfileHeaderProps {
  name: string
  occupation: string
  website: string
  email: string
  phone: string
  profilePic: string
}

export default function ProfileHeader ({ profile }:{ profile:ProfileHeaderProps } ) {
  return (
    <div id='layout' className='flex mb-2'>
      {/* Profile Picture */}
      <div id='layout' className='flex relative h-26 w-26 justify-center items-center flex-shrink-0 bg-gray-800 rounded-full'>
        <div className='relative h-25 w-25 rounded-full overflow-hidden'>
          <Image 
            src={ profile.profilePic }
            alt='Profile Picture'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      <div className='flex w-full justify-between items-center'>

        {/* Name and Occupation */}
        <div id='layout' className='flex flex-col pl-4'>
          <h1 className='text-4xl font-bold text-black'>
            { profile.name }
          </h1>
          <p className='text-lg font-medium mt-0.5 text-gray-900'>
            { profile.occupation }
          </p>
        </div>

        {/* Website, Email, and Phone Number */}
        <div id='layout' className='flex flex-col items-end'>
          <span className='flex items-center'>
            <h2 className='text-xl font-semibold'>
              { profile.website }
            </h2>
            <LinkIcon className='flex-shrink-0 ml-1 h-5 w-5 text-black' />
          </span>

          <span className='flex items-center'>
            <h3 className='font-medium'>
              { profile.email }
            </h3>
            <MailIcon className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-4 w-4 text-black'/>
          </span>

          <span className='flex items-center'>
            <h3 className='font-medium'>
              { profile.phone }
            </h3>
            <PhoneIcon className='flex-shrink-0 ml-1.5 mr-0.5 mt-0.5 h-4 w-4 text-black'/>
          </span>
        </div>

      </div>
    </div>
  )
}