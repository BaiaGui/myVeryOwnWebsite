import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {

    const [isOpen, setIsOpen] = useState(true)

    function handleMenuToggle(){
        setIsOpen(!isOpen)
    }


    return (

        <header className="border-b flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className=" flex justify-between items-center px-4 py-3">
                <p className="font-bold text-amber-900 text-xl">GUI.BAIA</p>
                <div className="sm:hidden">
                    <button onClick={handleMenuToggle} className="block text-amber-900 focus:outline-none">
                        <Menu className={isOpen?"hidden":"block"} />
                        <X className={isOpen?"block":"hidden"}/>
                    </button>
                </div>
            </div>
            <nav className={ (isOpen ? "block " : "hidden ") + "bg-amber-800/10 backdrop-blur-lg flex flex-col px-2 py-3 sm:block sm:bg-transparent sm:backdrop-blur-none sm:justify-center sm:align-center"}>
                <a className=" font-bold text-amber-950 hover:bg-amber-950/5 rounded-md px-2 py-1 sm:px-3 sm:py-3" href="#LandingSecId">Home</a>
                <a className="font-bold text-amber-950 hover:bg-amber-950/5 rounded-md px-2 py-1 sm:px-3 sm:py-3" href="#SkillsSecId">Habilidades</a>
                <a className="font-bold text-amber-950 hover:bg-amber-950/5 rounded-md px-2 py-1 sm:px-3 sm:py-3" href="#ProjectSecId">Projetos</a>
                <a className="font-bold text-amber-950 hover:bg-amber-950/5 rounded-md px-2 py-1 sm:px-3 sm:py-3" href="#ContactSecId">Contatos </a>
            </nav>
        </header>
    )
}