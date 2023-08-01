import popThumb from '../../assets/popThumb.png'

export function ProjectsSec(){
    return (
        <div className="flex flex-col items-center md:px-64 py-10 bg-amber-400/5">
             <h2 className="font-bold text-2xl mt-10git ">Projetos</h2>
            <ProjectCard side={"l"} title={"Pop Tac Toe"} imgUrl={popThumb} link={"https://baiagui.github.io/pop-tac-toe/"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, asperiores veniam sequi pariatur alias iste nisi eveniet ducimus labore deserunt quidem? Quasi asperiores odio placeat, enim impedit eum vel fugit.
            </ProjectCard>
            <ProjectCard side={"r"} title={"Projeto 1"} imgUrl={"https://wpblog.zyro.com/wp-content/uploads/2021/03/14_Best_Business_Website_Examples_of_2021.png"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, asperiores veniam sequi pariatur alias iste nisi eveniet ducimus labore deserunt quidem? Quasi asperiores odio placeat, enim impedit eum vel fugit.
            </ProjectCard>
        </div>
    );
}



function ProjectCard({imgUrl, title, children, side, link}){
    if(side=="l"){
        return(
            <div className="flex flex-col items-center w-screen mt-24  p-5 lg:flex-row lg:w-fit hover:scale-105 transition-all">
                <img src={imgUrl} alt="" className=" max-h-48 max-w-48 rounded-md"/>
                <div className="flex flex-col items-center mt-5 lg:items-start lg:ml-5">
                <a href={link} target="_blank" className="font-bold text-xl hover:underline">{title}</a>
                <p className="text-justify">{children}</p>
                </div>
            </div> 
            );
    }
    else{
        return(
            <div className="flex flex-col items-center w-screen mt-24 p-5 lg:flex-row-reverse lg:w-fit hover:scale-105 transition-all">
                <img src={imgUrl} alt="" className=" max-h-48 max-w-48 rounded-md"/>
                <div className="flex flex-col items-center mt-5 lg:items-end lg:mr-5">
                <a href={link} target="_blank" className="font-bold text-xl hover:underline">{title}</a>
                <p className="text-justify lg:text-right">{children}</p>
                </div>
            </div>
        );
    }
    
   
}