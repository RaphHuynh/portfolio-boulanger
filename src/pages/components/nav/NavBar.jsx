function NavBar(){
    const link = [
        {text:"Accueil", id:"#Home"},
        {text:"Galleries", id:"#Gallery"},
        {text:"A propos", id:"#About"}
    ]

    return (
        <nav className="fixed w-full flex items-center px-44 py-2">
            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-amber-500">
                Loïc Thierry
            </h2>
            <div className="flex mr-0 ml-auto">
                {link.map((item) => (
                    <a key={item.id} className="transition delay-150 box-border px-5 py-2 ml-2 border-2 rounded-full border-amber-500 text-center text-amber-500 text-lg bg-zinc-50 hover:bg-amber-500 hover:text-zinc-50" href={item.id}>{item.text}</a>
                ))}
            </div>
        </nav>
    )
}

export default NavBar;