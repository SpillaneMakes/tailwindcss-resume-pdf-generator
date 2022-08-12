
import { Children, cloneElement } from 'react'

interface PageBreakSpacingProps {
  children: JSX.Element[] | JSX.Element
}

export default function PageBreakSpacing ({ children }:PageBreakSpacingProps ) {  
  const childArray = ( Array.isArray( children )) ? [ ...children ] : [ children ]
  const isLast = childArray.length

  return (<>
    { Children.map( childArray, ( child, index ) => (
      <div>
        { cloneElement( child ) }
        { index !== isLast-1 && <PageBreak/> }
      </div>
    ))}
  </>)
}

const PageBreak = () => { return (
  <div id='page-break' className='w-full h-4' />
)}