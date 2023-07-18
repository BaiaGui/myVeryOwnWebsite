import './styles/App.css'
import { LandingSec } from './components/sections/LandingSec'
import { SkillsSec } from './components/sections/SkillsSec'

function App() {

  return (
    <div className='flex flex-col'>
      <LandingSec/>
      <SkillsSec>
        <p>HTML</p>
        <p>CSS</p>
      </SkillsSec>
    </div>
  )
}

export default App
