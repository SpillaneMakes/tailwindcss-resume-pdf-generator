
import { useState, useEffect } from 'react'
import LayoutBgColor from '@/helpers/layoutColors'
import Toolbar from '@/components/layout/Toolbar'
import PageBreakSpacing from '@/components/layout/PageBreakSpacing'
import ExampleResumeLayout from '@/components/examples/ExampleResumeLayout'

const DownloadedPdfFilename = 'generated_pdf_resume.pdf'

export default function Home() {
  const [bgToggle, setBgToggle] = useState(false)
  useEffect(() => {
    const elements = document.querySelectorAll('#layout')
    bgToggle
      ? elements.forEach((block, index) => { block.classList.add(LayoutBgColor(index)) })
      : elements.forEach((block, index) => { block.classList.remove(LayoutBgColor(index)) })
  }, [bgToggle])

  return (
    <div className='min-h-screen bg-slate-800'>
      <header id='header' className='flex py-4 mb-2 justify-center border-b-2 border-gray-400'>
        {/* Download Button and Layout Colors Toggle */}
        <Toolbar
          downloadFilename={DownloadedPdfFilename}
          bgToggleState={bgToggle}
          setBgToggleState={setBgToggle}
        />
      </header>

      {/* Resume PDF Workspace */}
      <main className='flex flex-col items-center'>
        <PageBreakSpacing>
          <ExampleResumeLayout />

          {/* Place new pages here */}

        </PageBreakSpacing>
      </main>

      <footer id='footer' className='flex h-8 mt-2 items-center justify-center'>
        <p className='text-slate-200 text-xs
            hover:text-slate-400
            transition duration-300 ease-in-out
            transform hover:-translate-y-1 hover:scale-110
            cursor-pointer
          '>
          <a href='https://github.com/SpillaneMakes/tailwindcss-resume-pdf-generator' target='_blank' rel='noreferrer'>View on GitHub - MIT License - SpillaneMakes & Miguel Gargallo © 2022.</a>
        </p>
      </footer>
    </div>
  )
}
