
interface IconSkillListProps {
  label: string
  iconSkillList: {
    key: number
    skill: string
    details?: string[]
    icon?: JSX.Element
  }[]
}

export default function IconSkillList ({ label, iconSkillList }: IconSkillListProps) {
  return (
    <div id='layout'>
      {/* List Title */}
      <span className='flex ml-5 mb-0.5 text-md italic underline' >
        { label }
      </span>
      {/* Listed Skills with Icons */}
      <ul className='flex flex-col text-sm gap-0.5'>
        { iconSkillList.map(( skill ) => (
          <li key={ skill.key }>
            <div className='flex flex-row gap-1 items-center'>
              { skill.icon }
              { skill.skill }
            </div>
            <div>
              { skill.details && 
                <ul className='ml-5 text-xsm text-gray-700'>
                  { skill.details.map(( detail ) => (
                    <li key={ detail }>{ detail }</li>
                  ))}
                </ul>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}