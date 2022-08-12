import { useState } from 'react'
import clsxm from '@/lib/helpers/clsxm'
import { Switch } from '@headlessui/react'
import Page from '@/components/layout/Page'


const DownloadedPdfFilename = 'example_generated_pdf_resume.pdf'

export default function Home () {
  const [ bgToggle, setBgToggle ] = useState( false )
  return (
    <div className='min-h-screen bg-slate-800'>

      <header id='header' className='flex py-4 mb-2 justify-center border-b-2 border-gray-400'>

        {/* Download PDF Button */}
        <button className='inline-flex px-6 py-3 items-center text-base font-medium rounded-md border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          <a href='/api/pdf' download={ DownloadedPdfFilename }>
            Download PDF
          </a>
        </button>

        {/* Background Layouts Helper Switch */}
        <div className='flex px-4 py-2 ml-4 items-center bg-zinc-300 rounded-md'>
          <Switch
            checked={ bgToggle }
            onChange={ setBgToggle }
            className={clsxm(
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              bgToggle ? 'bg-indigo-600' : 'bg-gray-200'
          )}>
            <span 
              aria-hidden='true'
              className={clsxm(
                'pointer-events-none inline-block h-5 w-5 rounded-full',
                'bg-white shadow transform ring-0 transition ease-in-out duration-200',
                bgToggle ? 'translate-x-5' : 'translate-x-0',
            )}/>
          </Switch>
          <span className='ml-2'>Toggle Background Layouts</span>
        </div>
      </header>

      {/* Resume PDF Workspace */}
      <main className='flex flex-col items-center'>
        <Page>
          Content
        </Page>
      </main>

      <footer id='footer' className='flex h-8 mt-2 items-center justify-center'>
        <span className='text-slate-200'>
          SpillaneMakes 2022
        </span>
      </footer>
    </div>
  )
}
