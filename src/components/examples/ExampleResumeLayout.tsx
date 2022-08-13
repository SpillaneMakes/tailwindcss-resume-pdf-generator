
import Page from '../layout/Page'

// Template Blocks
import ProfileHeader from '../templates/ProfileHeader'
import ResumeSection from '../templates/ResumeSection'
import ExperienceEntry from '../templates/ExperienceEntry'
import EducationEntry from '../templates/EducationEntry'
import SkillList from '../templates/lists/SkillList'
import IconSkillList from '../templates/lists/IconSkillList'

// Resume Data Imports from Data Directory
import Profile from '@/data/Profile'
import Experience from '@/data/Experience'
import Education from '@/data/Education'
import { SoftwareSkills, ManagementSkills, ProgrammingSkills, OperatingSystemSkills } from '@/data/Skills'


export default function ExampleResumeLayout () {

  return (
    <Page>
      <ProfileHeader profile={ Profile } />

      {/* Work Experience with Fetured Details */}
      <ResumeSection sectionTitle='Experience'>
        { Experience.map(( entry ) => (
          <ExperienceEntry key={ entry.key } experience={ entry }/>
        ))}
      </ResumeSection>

      {/* University/College Education */}
      <ResumeSection sectionTitle='Education'>
        { Education.map(( entry ) => (
          <EducationEntry key={ entry.degree } education={ entry } />
        ))}
      </ResumeSection>

      <ResumeSection sectionTitle='Skills' className='flex justify-evenly'>
        <SkillList 
          label='Management Strengths'
          skillList={ ManagementSkills }
        />
        <IconSkillList 
          label='Software Experience'
          iconSkillList={ SoftwareSkills }
        />
        <div>
          <IconSkillList 
            label='Programming'
            iconSkillList={ ProgrammingSkills }
          />
          <IconSkillList 
            label='Operating Systems'
            iconSkillList={ OperatingSystemSkills }
          />
        </div>
      </ResumeSection>
    </Page>
  )
}


