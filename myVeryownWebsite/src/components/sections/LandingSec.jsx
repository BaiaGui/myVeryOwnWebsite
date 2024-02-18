import profile from '../../assets/profilePic.webp'
import bgBlur from '../../assets/bgBlur.svg'
import { Navbar } from '../Navbar';


export function LandingSec() {
    return (
        <>  
            <div className="absolute w-full h-screen -z-10 blur-2xl">
            <img src={bgBlur} className="w-full h-full bg-cover opacity-75" alt="" />
            </div>
            
            <div className="flex flex-col bg-gradient-to-b from-amber-100/40 to-amber-700/5 md:h-screen" id='LandingSecId'>
                <Navbar/>
                <div className="flex flex-col items-center h-full md:flex-row-reverse p-8 xl:px-72">
                    <div className="md:w-1/2 flex justify-center">
                        <img src={profile} alt="Selfie" className="flex rounded-full mb-5 md:mb-0 md:w-2/3" />
                    </div>
                    <div className="flex flex-col justify-center items-center  md:items-start md:w-1/2">
                        <h1 className="w-fit text-center font-bold text-3xl md:text-start md:text-6xl xl:text-8xl text-stone-800 tracking-tighter">Guilherme Baia</h1>
                        <h2 className="bg-gradient-to-bl  font-semibold mb-9 from-red-600 to-orange-600 bg-clip-text text-transparent font-serif italic text-center text-xl md:text-3xl md:text-start">Desenvolvedor Web Full-Stack</h2>
                        <h3 className="text-justify w-fit mt-4 md:text-start text-md text-stone-600">
                            Oi! Sou desenvolvedor web full-stack e sou apaixonado por criar websites e aplicações.
                            Eu acredito que a tecnologia tem o poder de melhorar a vida das pessoas e quero poder contribuir com isso através do meu trabalho.<br/>Estou sempre à procura de novos desafios para me aprimorar como desenvolvedor e estou aqui para ajudar você com suas necessidades tecnológicas. Sinta-se à vontade para explorar mais sobre meu trabalho e como posso colaborar com seus projetos!
                        </h3>
                        <a href="#SkillsSecId"><button className="text-md border font-bold text-stone-800 px-20 py-6 rounded-md mt-9 bg-stone-100/50 border-amber-900/20 hover:scale-105 ease-in-out duration-100">Explorar</button></a>
                    </div>
                </div>
            </div>
            </>

    );
}

/* Align Items vs Justify Content
Align: cross axis
Justify: main axis



*/
