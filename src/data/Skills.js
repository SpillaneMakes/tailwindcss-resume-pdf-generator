
import { FaPython, FaWindows } from 'react-icons/fa'
import { AiOutlineConsoleSql } from  'react-icons/ai'
import { 
  SiJavascript, 
  SiArchlinux, 
  SiMicrosoftoffice, 
  SiGooglesheets,
  SiTableau,
  SiGoogleanalytics,
  SiAirtable,
  SiQuickbooks 
} from 'react-icons/si'

export const ManagementSkills = [{
  key: 1,
  skill: 'Leadership Experience',
},{
  key: 2,
  skill: 'Problem Solving',
},{
  key: 3,
  skill: 'Budget Management',
},{
  key: 4,
  skill: 'Data Visualization',
},{
  key: 5,
  skill: 'Oral and Written Communication',
}]

export const SoftwareSkills = [{
  key: 1,
  skill: 'Micosoft Office Suites',
  icon: <SiMicrosoftoffice className='w-4 h-4' />
},{
  key: 2,
  skill: 'Excel/Google Sheets',
  icon: <SiGooglesheets className='w-4 h-4' />
},{
  key: 3,
  skill: 'Tableau',
  icon: <SiTableau className='w-4 h-4' />
},{
  key: 4,
  skill: 'Google Analytics',
  icon: <SiGoogleanalytics className='w-4 h-4' />
},{
  key: 5,
  skill: 'AirTable',
  icon: <SiAirtable className='w-4 h-4' />
},{
  key: 6,
  skill: 'Quickbooks',
  icon: <SiQuickbooks className='w-4 h-4' />
}]

export const ProgrammingSkills = [{
  key: 1,
  skill: 'SQL',
  icon: <AiOutlineConsoleSql className='w-4 h-4' />
},{
  key: 2,
  skill: 'Python',
  icon: <FaPython className='w-4 h-4' />
},{
  key: 3,
  skill: 'Javascript',
  icon: <SiJavascript className='w-4 h-4' />
}]

export const OperatingSystemSkills =[{
  key: 1,
  skill: 'Windows',
  icon: <FaWindows className='w-4 h-4' />
},{
  key: 2,
  skill: 'Arch Linux',
  icon: <SiArchlinux className='w-4 h-4' />
}]