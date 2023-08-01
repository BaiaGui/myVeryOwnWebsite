import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'

export function ContactSec() {
    return (
        <div className="flex flex-col items-center py-24">
            <h2 className="font-bold text-2xl">Entre em contato</h2>
            <div className="flex space-x-16 mt-24">
                <a href="mailto: guilhermebaiav@gmail.com"><img src={email} alt="" width={"50px"}/></a>
                <a href="https://www.linkedin.com/in/guibaia/" target='_blank'><img src={linkedin} alt="" width={"50px"}/></a>
                <a href="https://github.com/BaiaGui" target='_blank'><img src={github} alt="" width={"50px"}/></a>
            </div>
        </div>
    );
}