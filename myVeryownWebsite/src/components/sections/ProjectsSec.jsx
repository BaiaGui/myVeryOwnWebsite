export function ProjectsSec(){
    return (
        <div className="flex flex-col items-center px-64 bg-amber-400/5">
             <h2 className="font-bold text-lg mt-10">Projetos</h2>
            <ProjectCard side={"l"} title={"Projeto 1"} imgUrl={"https://wpblog.zyro.com/wp-content/uploads/2021/03/14_Best_Business_Website_Examples_of_2021.png"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, asperiores veniam sequi pariatur alias iste nisi eveniet ducimus labore deserunt quidem? Quasi asperiores odio placeat, enim impedit eum vel fugit.
            </ProjectCard>
            <ProjectCard side={"r"} title={"Projeto 1"} imgUrl={"https://wpblog.zyro.com/wp-content/uploads/2021/03/14_Best_Business_Website_Examples_of_2021.png"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, asperiores veniam sequi pariatur alias iste nisi eveniet ducimus labore deserunt quidem? Quasi asperiores odio placeat, enim impedit eum vel fugit.
            </ProjectCard>
        </div>
    );
}



function ProjectCard({imgUrl, title, children, side}){
    if(side=="l"){
        return(
            <div className="flex flex-col items-center w-screen mt-24  p-5 lg:flex-row lg:w-fit">
                <img src={imgUrl} alt="" className=" max-h-48 max-w-48 rounded-md"/>
                <div className="flex flex-col items-center mt-5 lg:items-start lg:ml-5">
                <a href="#" className="font-bold text-md">{title}</a>
                <p className="text-justify">{children}</p>
                </div>
            </div> 
            );
    }
    else{
        return(
            <div className="flex flex-col items-center w-screen mt-24 p-5 lg:flex-row-reverse lg:w-fit">
                <img src={imgUrl} alt="" className=" max-h-48 max-w-48 rounded-md"/>
                <div className="flex flex-col items-center mt-5 lg:items-end lg:mr-5">
                <a href="#" className="font-bold text-md">{title}</a>
                <p className="text-justify lg:text-right">{children}</p>
                </div>
            </div>
        );
    }
    
   
}