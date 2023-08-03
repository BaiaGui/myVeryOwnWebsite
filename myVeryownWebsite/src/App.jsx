import './styles/App.css'
import { LandingSec } from './components/sections/LandingSec'
import { SkillsSec } from './components/sections/SkillsSec'
import { ProjectsSec } from './components/sections/ProjectsSec'
import { ContactSec } from './components/sections/ContactSec'

function App() {

  return (
    <div className='flex flex-col'>
      <LandingSec/>
      <SkillsSec/>
      <ProjectsSec/>
      <ContactSec/>
    </div>
  )
}

export default App


