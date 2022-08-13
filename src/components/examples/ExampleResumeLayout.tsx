
import Page from '../layout/Page'

// Template Blocks
import ProfileHeader from '../templates/ProfileHeader'
import ExperienceEntry from '../templates/ExperienceEntry'

// Resume Data Imports from Data Directory
import Profile from '@/data/Profile'
import Experience from '@/data/Experience'
import Education from '@/data/Education'
import ResumeSection from '../templates/ResumeSection'
import EducationEntry from '../templates/EducationEntry'


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

      <ResumeSection sectionTitle='Skills'>

      </ResumeSection>



    </Page>
  )
}


