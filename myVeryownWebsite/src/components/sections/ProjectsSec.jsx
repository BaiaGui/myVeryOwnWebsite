import popThumb from '../../assets/popThumb.webp'
import plannerThumb from '../../assets/plannerThumb.webp'
import LXPThumb from '../../assets/LXPThumb.png'
import smartNotesThumb from '../../assets/SmartNotes.png'
import vertexaThumb from '../../assets/vertexaThumb.webp'
import external from '../../assets/external.svg'
import { SecTitle } from '../SecTitle';
import { ProjectCard } from '../ProjectCard';
import { Slider } from '../Slider';


export function ProjectsSec(){

    let projects = [
        {
            "title": "Smart Notes",
            "thumbnail": smartNotesThumb,
            "deployLink": "https://cefis-client.onrender.com",
            "description": "Um app de anotações que utiliza reconhecimento de fala para armazenar suas notas. Capture seus pensamentos rapidamente através do SmartNotes.",
            "tags": ['React', 'Tailwind', 'Radix']
        },
        {
            "title": "CEFIS LXP",
            "thumbnail": LXPThumb,
            "deployLink": "https://cefis-client.onrender.com",
            "description": "Este projeto fullstack consiste em uma versão simplificada de uma LXP (Learning Experience Platform). Alunos e Professores podem interagir através de cursos cadastrados na plataforma. Construido em React e Node para o desafio tech CEFIS.",
            "tags": ['React', 'Tailwind', 'Node', 'Express', 'PostgreSQL']
        },
        // {
        //     "title": "myPlanner",
        //     "thumbnail": plannerThumb,
        //     "deployLink": "https://baiaplanner.netlify.app",
        //     "description": 'Um planner semanal para auxiliar na organização de tarefas da semana. Feito com React e Tailwind',
        //     "tags": ['React', 'Tailwind']
        // },
        {
            "title": "QuizTime",
            "thumbnail": "https://raw.githubusercontent.com/BaiaGui/quiz-time/main/quiz-challenge/src/assets/screenshot.png",
            "deployLink": "https://quizchallenge.onrender.com",
            "description": "Um Jogo estilo quiz onde o jogador poderá responder perguntas e testar seus conhecimentos em diferentes assuntos. Foi foi desenvolvido com React e faz parte de um desafio proposto pela Rocketseat.",
            "tags": ["React", "Tailwind"]
        },
        {
            "title": "Pop-Tac-Toe",
            "thumbnail": popThumb, 
            "deployLink": "https://poptactoe.onrender.com",
            "description": "Jogo da velha para web com temática Pop Art. Chame um amigo e divirta-se!",
            "tags": ["HTML", "CSS", "Javascript"]
        },
    ]

    const cards = projects.map(project => <ProjectCard key={crypto.randomUUID()} project={project}/> )



    return (
        <div className="flex flex-col max-h-[700px] gap-5 items-center lg:px-64 py-10 bg-amber-500/10 pb-20" id='ProjectSecId'>
                <SecTitle>{"Projetos"}</SecTitle>
                <Slider slides={cards} numberOfCardsShown={6}/>
        </div>
    );
}


