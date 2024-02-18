import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'
import download from '../../assets/download.svg'
import { SecTitle } from '../SecTitle'
import CV from '../../assets/Curriculum Vitae.pdf'

export function ContactSec() {

    let iconSize = "40px";
    return (
        <div className="flex flex-col py-10 items-center" id='ContactSecId'>
           <SecTitle>Entre em contato!</SecTitle>
            <div className="flex space-x-16 py-10 text-amber-50">
                <a href="mailto: guilhermebaiav@gmail.com"><img src={email} alt="" width={iconSize} className="hover:scale-105"/></a>
                <a href="https://www.linkedin.com/in/guibaia/" target='_blank'><img src={linkedin} alt="" width={iconSize} className="hover:scale-105"/></a>
                <a href="https://github.com/BaiaGui" target='_blank'><img src={github} alt="" width={iconSize} className="hover:scale-105"/></a>
            </div>
            <p className="text-xl">E-mail: <span className=" text-amber-800">guilhermebaiav@gmail.com</span></p>
            {/* <div className='flex flex-col justify-center items-center mt-16'>
                <p className='text-lg text-center'>Quer saber mais sobre minha trajetória profissional? Meu currículo está disponível!</p>
                <a href={CV} download="cv_guiBaia.pdf" className="flex items-center text-md border font-bold text-stone-500 w-fit p-3 md:px-28 py-5 rounded-md mt-9 bg-white border-amber-900/20 hover:text-stone-800 hover:border-stone-700 ease-in-out duration-100"><img src={download} alt="" className=' mr-3 w-5' />Currículo</a>

            </div> */}
        </div>
    );
}