
import { useState, useEffect } from 'react'
import LayoutBgColor from '@/lib/helpers/layoutColors'

import Toolbar from '@/components/layout/Toolbar'
import Page from '@/components/layout/Page'
import PageBreakSpacing from '@/components/layout/PageBreakSpacing'
import ExampleResumeLayout from '@/components/examples/ExampleResumeLayout'


const DownloadedPdfFilename = 'example_generated_pdf_resume.pdf'

export default function Home () {

  const [ bgToggle, setBgToggle ] = useState( false )

  useEffect(() => {
    const elements = document.querySelectorAll('#layout')
    bgToggle
      ? elements.forEach((block,index) => {block.classList.add( LayoutBgColor(index) )})
      : elements.forEach((block,index) => {block.classList.remove( LayoutBgColor(index) )})
  }, [ bgToggle ])
  
  return (
    <div className='min-h-screen bg-slate-800'>

      <header id='header' className='flex py-4 mb-2 justify-center border-b-2 border-gray-400'>
        {/* Download Button and Layout Colors Toggle */}
        <Toolbar 
          downloadFilename={ DownloadedPdfFilename } 
          bgToggleState={ bgToggle } 
          setBgToggleState={ setBgToggle } 
        />
      </header>

      {/* Resume PDF Workspace */}
      <main className='flex flex-col items-center'>
        <PageBreakSpacing>
          <ExampleResumeLayout />
          <Page>
            Content
          </Page>
        </PageBreakSpacing>
      </main>

      <footer id='footer' className='flex h-8 mt-2 items-center justify-center'>
        <span className='text-slate-200'>
          SpillaneMakes 2022
        </span>
      </footer>
    </div>
  )
}
