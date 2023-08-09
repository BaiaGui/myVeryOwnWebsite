import popThumb from '../../assets/popThumb.png'
import plannerThumb from '../../assets/plannerThumb.png'
import vertexaThumb from '../../assets/vertexaThumb.png'
import { SecTitle } from '../SecTitle';

export function ProjectsSec(){
    return (
        <div className="flex flex-col items-center lg:px-64 py-10 bg-amber-400/5">
            <SecTitle>{"Projetos"}</SecTitle>
            <ProjectCard side={"l"} title={"Pop Tac Toe"} imgUrl={popThumb} link={"https://baiagui.github.io/pop-tac-toe/"}>
                Jogo da velha baseado nos estilo pop art feito em HTML, CSS e Javascript
            </ProjectCard>
            <ProjectCard side={"r"} title={"Vertexa"} imgUrl={vertexaThumb} link={"https://vertexa.com.br/"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, asperiores veniam sequi pariatur alias iste nisi eveniet ducimus labore deserunt quidem? Quasi asperiores odio placeat, enim impedit eum vel fugit.
            </ProjectCard>
            <ProjectCard side={"l"} title={"myPlanner"} imgUrl={plannerThumb} link={"https://baiaplanner.netlify.app"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, asperiores veniam sequi pariatur alias iste nisi eveniet ducimus labore deserunt quidem? Quasi asperiores odio placeat, enim impedit eum vel fugit.
            </ProjectCard> 
        </div>
    );
}



function ProjectCard({imgUrl, title, children, side, link}){
    

    if(side=="l"){

        return(
            <div className="flex flex-col items-center w-full mt-24 p-5 lg:flex-row lg:w-fit">
                <img src={imgUrl} alt="" className=" max-h-48 max-w-48 rounded-md"/>
                <div className="flex flex-col items-center mt-5 lg:items-start lg:ml-5">
                <a href={link} target="_blank" className="font-bold text-lg hover:underline text-zinc-700">{title}</a>
                <p className="text-justify">{children}</p>
                </div>
            </div> 
            );
    }
    else{
        return(
            <div className="flex flex-col items-center w-full mt-24 p-5 lg:flex-row-reverse lg:w-fit">
                <img src={imgUrl} alt="" className=" max-h-48 max-w-48 rounded-md"/>
                <div className="flex flex-col items-center mt-5 lg:items-end lg:mr-5">
                <a href={link} target="_blank" className="font-bold text-xl hover:underline text-zinc-700">{title}</a>
                <p className="text-justify lg:text-right">{children}</p>
                </div>
            </div>
        );
    }
    
   
}