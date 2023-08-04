import profile from '../../assets/profilePic.jpg'

export function LandingSec() {
    return (
        <>
            <div className="flex flex-col bg-gradient-to-b from-amber-100 to-amber-700/5 md:h-screen">
                <header className="flex w-full justify-between px-10 py-3 border-b border-amber-900/20 items-center">
                    <p className="font-bold text-amber-900 text-xl">GUI.BAIA</p>
                    <ul className="flex flex-row space-x-5 text-sm font-bold text-amber-950">
                        <li className="hover:text-amber-800"><a href="#">Habilidades</a></li>
                        <li className="hover:text-amber-800"><a href="#">Projetos</a></li>
                        <li className="hover:text-amber-800"><a href="#">Currículo</a></li>
                        <li className="hover:text-amber-800"><a href="#">Contatos </a></li>

                    </ul>
                </header>
                <div className="flex flex-col items-center h-full md:flex-row-reverse p-8 xl:px-72">
                    <div className="md:w-1/2 flex justify-center">
                        <img src={profile} alt="Selfie" className="flex rounded-full mb-5 md:mb-0 md:w-2/3" />
                    </div>
                    <div className="flex flex-col justify-center items-center  md:items-start md:w-1/2">
                        <h1 className="w-fit text-center font-bold text-xl md:text-start md:text-2xl lg:text-4xl text-stone-800">Olá, meu nome é Guilherme Baia. Sou desenvolvedor Front-end e Web Designer</h1>
                        <h2 className="w-fit mt-4 text-center md:text-start text-md text-stone-600">Minha missão é, através da tecnologia e do meu trabalho, causar impactos positivos na sociedade melhorar a qualidade de vida de todos. Conheça mais sobre meu trabalho! </h2>
                        <button className="text-md border font-bold text-stone-800 px-20 py-6 rounded-md mt-9 bg-stone-100/50 border-amber-900/20 hover:scale-105 ease-in-out duration-100">Explorar</button>
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
