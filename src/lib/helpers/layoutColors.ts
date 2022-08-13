
const twColors = [
  'bg-red-200',
  'bg-blue-200',
  'bg-lime-200',
  'bg-purple-200',
  'bg-amber-200',
  'bg-cyan-200',
  'bg-emerald-200',
  'bg-pink-200',
  'bg-teal-200',
  'bg-yellow-200',
  'bg-indigo-200',
  'bg-rose-200',
  'bg-stone-200',
  'bg-orange-200'
]

const LayoutBgColor = ( index:number ) => {
  if ( index <= twColors.length ) {
    return twColors[ index ]
  } else {
    return ( twColors[( index % twColors.length -1 )])
  }
}

export default LayoutBgColor
