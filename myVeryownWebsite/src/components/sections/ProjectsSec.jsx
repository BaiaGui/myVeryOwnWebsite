import popThumb from '../../assets/popThumb.webp'
import plannerThumb from '../../assets/plannerThumb.webp'
import vertexaThumb from '../../assets/vertexaThumb.webp'
import external from '../../assets/external.svg'
import { SecTitle } from '../SecTitle';
import { ProjectCard } from '../ProjectCard';

export function ProjectsSec(){

    let projects = [
        {
            "thumbnail": plannerThumb,
            "deployLink": "https://baiaplanner.netlify.app",
            "description": 'Um planner semanal para auxiliar na organização de tarefas da semana. Feito com React e Tailwind',
            "tags": ['React', 'Tailwind']
        },
        {
            "thumbnail": plannerThumb,
            "deployLink": "https://baiaplanner.netlify.app",
            "description": 'Um planner semanal para auxiliar na organização de tarefas da semana. Feito com React e Tailwind',
            "tags": ['React', 'Tailwind']
        },
        {
            "thumbnail": plannerThumb,
            "deployLink": "https://baiaplanner.netlify.app",
            "description": 'Um planner semanal para auxiliar na organização de tarefas da semana. Feito com React e Tailwind',
            "tags": ['React', 'Tailwind']
        },
    ]

    const cards = projects.map(project => <ProjectCard key={crypto.randomUUID} project={project}/> )



    return (
        <div className="flex flex-col items-center lg:px-64 py-10 bg-amber-400/5" id='ProjectSecId'>
             <SecTitle>{"Projetos"}</SecTitle>
             <div className='mt-5 flex gap-2'>
             {cards}
             </div>
             
        </div>
    );
}



