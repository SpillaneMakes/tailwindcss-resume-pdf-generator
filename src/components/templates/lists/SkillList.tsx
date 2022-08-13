
interface SkillListProps {
  label: string
  skillList: {
    key: number
    skill: string
    details?: string[]
  }[]
}

export default function SkillList({ label, skillList }: SkillListProps) {
  return (
    <div id='layout'>
      {/* Programming Langauges */}
      <span className='flex ml-5 mb-0.5 text-md italic underline' >
        { label }
      </span>
      <ul className='flex flex-col text-sm gap-0.5 list-disc'>
        { skillList.map(( skill ) => (
          <li key={ skill.key }>
            { skill.skill }
            <div>
              { skill.details && 
                <ul className='ml-5 text-sm text-gray-700'>
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

