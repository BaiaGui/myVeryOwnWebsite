import popThumb from '../../assets/popThumb.webp'
import plannerThumb from '../../assets/plannerThumb.webp'
import vertexaThumb from '../../assets/vertexaThumb.webp'
import external from '../../assets/external.svg'
import { SecTitle } from '../SecTitle';
import { ProjectCard } from '../ProjectCard';
import { Slider } from '../Slider';


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
        {
            "thumbnail": plannerThumb,
            "deployLink": "https://baiaplanner.netlify.app",
            "description": 'Um planner semanal para auxiliar na organização de tarefas da semana. Feito com React e Tailwind',
            "tags": ['React']
        },
        {
            "thumbnail": plannerThumb,
            "deployLink": "https://baiaplanner.netlify.app",
            "description": 'Um planner semanal para auxiliar na organização de tarefas da semana. Feito com React e Tailwind',
            "tags": ['React']
        },
    ]

    const cards = projects.map(project => <ProjectCard key={crypto.randomUUID} project={project}/> )



    return (
        <div className="flex flex-col max-h-[700px] gap-5 overflow-hidden items-center lg:px-64 py-10 bg-amber-500/10" id='ProjectSecId'>
                <SecTitle>{"Projetos"}</SecTitle>
                <Slider slides={cards} numberOfCardsShown={6}/>
        </div>
    );
}


