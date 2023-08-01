import '../../styles/SkillsSec.css'
import '../../assets/react.svg'
import reactlogo from '../../assets/react.svg'

export function SkillsSec({ children }) {
    return (
        <div className="flex flex-col items-center px-5 py-10 bg-white">
            <h2 className="font-bold text-2xl">Habilidades</h2>
            <div className="grid grid-cols-4 gap-12 mt-10 md:grid-cols-7">

                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />
                <SkillIcon />

            </div>
        </div>
    );
}


function SkillIcon() {
    return (
        <div className="w-fit flex flex-col justify-center items-center hover:scale-110 transition-all">
            <img src={reactlogo} alt="React" className='lg:w-14' />
            <p>React</p>
        </div>
    );
}