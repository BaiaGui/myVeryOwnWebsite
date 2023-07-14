export function LandingSec() {
    return (
        <div className="bg-gradient-to-b from-amber-100 to-amber-700/10 w-screen h-screen flex flex-col">
            <header className="flex w-screen h-fit justify-between px-10 py-2 border-b items-center box-border">
                <p className="font-bold text-amber-900">GUI.BAIA</p>
                <ul className="flex flex-row space-x-5 text-xs">
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Currículo</a></li>
                    <li><a href="#">Contatos </a></li>

                </ul>
            </header>
            <div className="w-full h-full flex flex-col items-center md:flex-row-reverse p-8 xl:p-72">
                <div className="w-1/2 flex justify-center ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt33mnb3mYDSDAH9deKqcB5GMug-caGeqWdHiARd4pkBjVG8tXy7ll7PJp0HnDhm9IK2c&usqp=CAU" alt="Selfie" className="flex rounded-full w-96"/>
                </div>
                <div className="flex flex-col justify-center items-center  md:items-start md:w-1/2">
                    <h1 className="w-fit text-center font-bold text-xl md:text-start text-stone-800">Olá, meu nome é Guilherme Baia. Sou desenvolvedor Front-end e Web Designer</h1>
                    <h2 className="w-fit text-center md:text-start text-sm text-stone-600">Estou aqui para ajudar empresas a se exporem na internet de maneira simples, acessível e rápida. Conheça mais sobre meu trabalho!</h2>
                    <button className="text-sm border font-bold text-stone-800 px-12 py-3 rounded-md mt-9 bg-white/50 border-amber-900/20">Explorar</button>
                </div>
            </div>
        </div>
    );
}

/* Align Items vs Justify Content
Align: cross axis
Justify: main axis



*/
