
interface ResumeSectionProps {
  sectionTitle: string
  className?: string
  children?: JSX.Element[] | JSX.Element | string
}

export default function ResumeSection ({ sectionTitle, className, children }: ResumeSectionProps ) {
  return (
    <div id='layout' className={ className }>
      {/* Section Divider */}
      <div className='flex items-center mb-1'>
        <h2 className='pr-2 text-2xl font-bold'>
          { sectionTitle }
        </h2>
        <div className='w-full border-t border-2 border-black' />
      </div>
      { children }
    </div>
  )
}

