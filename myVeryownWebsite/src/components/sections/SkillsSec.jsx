import '../../styles/SkillsSec.css'
import '../../assets/react.svg'
import reactlogo from '../../assets/react.svg'
import figmaLogo from '../../assets/figma.svg'
import flutterLogo from '../../assets/flutter.svg'
import tailwindLogo from '../../assets/tailwind.svg'
import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import { useState } from 'react'

export function SkillsSec() {
    return (
        <div className="flex flex-col items-center px-5 py-10 bg-white">
            <h2 className="font-bold text-2xl">Habilidades</h2>
            <div className="grid grid-cols-4 gap-12 mt-10 md:grid-cols-6 justify-items-center">
            <SkillIcon logoSrc={reactlogo}>React</SkillIcon>
            <SkillIcon logoSrc={tailwindLogo}>Tailwind</SkillIcon>
            <SkillIcon logoSrc={htmlLogo}>HTML</SkillIcon>
            <SkillIcon logoSrc={cssLogo}>CSS</SkillIcon>
            <SkillIcon logoSrc={flutterLogo}>Flutter</SkillIcon>
            <SkillIcon logoSrc={figmaLogo}>Figma</SkillIcon>

            </div>
        </div>
    );
}


function SkillIcon({children, logoSrc}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)} className=" w-fit flex flex-col justify-center items-center hover:scale-110 transition-all">
            <img src={logoSrc} alt={children} className='h-10 w-10 lg:h-12 lg:w-12' />
            {hovered? (<p className='text-zinc-400 transition-all duration-200 ease-in-out'>{children}</p>):(<p className='text-zinc-400 invisible transition-all duration-100 ease-in-out'>{children}</p>)}
            
        </div>
    );
  }