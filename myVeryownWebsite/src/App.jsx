import './styles/App.css'
import { LandingSec } from './components/sections/LandingSec'
import { SkillsSec } from './components/sections/SkillsSec'
import { ProjectsSec } from './components/sections/ProjectsSec'

function App() {

  return (
    <div className='flex flex-col'>
      <LandingSec/>
      <SkillsSec>
        <p>HTML</p>
        <p>CSS</p>
      </SkillsSec>
      <ProjectsSec/>
    </div>
  )
}

export default App
