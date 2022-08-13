
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merge classes with tailwind-merge with clsx into single string
export default function clsxm( ...classes: ClassValue[] ) {
  return (
    twMerge(clsx( ...classes ))
  )
}
