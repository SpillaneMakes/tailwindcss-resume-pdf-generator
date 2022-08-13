
import { Dispatch, SetStateAction } from 'react'
import clsxm from '@/helpers/clsxm'
import { Switch } from '@headlessui/react'

interface ToolbarProps {
  downloadFilename: string
  bgToggleState: boolean
  setBgToggleState: Dispatch<SetStateAction<boolean>>
}

export default function Toolbar ({ downloadFilename, bgToggleState, setBgToggleState }: ToolbarProps) {
  return (
    <>
      {/* Download PDF Button */}
      <button className='inline-flex px-6 py-3 items-center text-base font-medium rounded-md border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        <a href='/api/pdf' download={ downloadFilename }>
          Download PDF
        </a>
      </button>

      {/* Background Layouts Helper Switch */}
      <div className='flex px-4 py-2 ml-4 items-center bg-zinc-300 rounded-md'>
        <Switch
          checked={ bgToggleState }
          onChange={ setBgToggleState }
          className={clsxm(
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            bgToggleState ? 'bg-indigo-600' : 'bg-gray-200'
        )}>
          <span 
            aria-hidden='true'
            className={clsxm(
              'pointer-events-none inline-block h-5 w-5 rounded-full',
              'bg-white shadow transform ring-0 transition ease-in-out duration-200',
              bgToggleState ? 'translate-x-5' : 'translate-x-0',
          )}/>
        </Switch>
        <span className='ml-2'>Toggle Background Layouts</span>
      </div>
    </>
  )
}