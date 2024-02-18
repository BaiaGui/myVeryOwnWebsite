import profile from '../../assets/profilePic.webp'
import bgBlur from '../../assets/bgBlur.svg'
import { Navbar } from '../Navbar';


export function LandingSec() {
    return (
        <>  
            {/* <div className="absolute -z-10 w-full h-full">
                <div className='bg-red-600/20 w-48 h-48 rounded-full absolute top-2/4 left-72'></div>
                <div className='bg-amber-600/20 w-72 h-72 rounded-full absolute top-44 left-1/3'></div>
                <div className='bg-fuchsia-800/20 w-96 h-96 rounded-full absolute top-9 left-2/3'></div>
                <div className='bg-sky-500/20 w-1/4 h-2/4 rounded-full -top-36 -left-14 absolute'></div>
                <div className='bg-green-500/20 w-1/4 h-2/4 rounded-full top-3/4 left-3/4 absolute'></div>
            </div> */}
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
                        <h1 className="w-fit text-center font-bold text-xl md:text-start md:text-2xl lg:text-4xl text-stone-800">Olá, meu nome é Guilherme Baia. Sou desenvolvedor Front-end e Web Designer</h1>
                        <h2 className="w-fit mt-4 text-center md:text-start text-md text-stone-600">Minha missão é, através da tecnologia e do meu trabalho, causar impactos positivos na sociedade melhorar a qualidade de vida de todos. Conheça mais sobre meu trabalho! </h2>
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
