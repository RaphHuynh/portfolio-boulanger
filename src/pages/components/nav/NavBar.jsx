function NavBar(){
    const link = [
        {text:"Accueil", id:"#Home"},
        {text:"Galleries", id:"#Gallery"},
        {text:"A propos", id:"#About"}
    ]

    return (
        <nav className="fixed w-full flex items-center px-20 py-2">
            <h2 className="text-2xl">
                Loïc Thierry
            </h2>
            <div className="flex mr-0 ml-auto">
                {link.map((item) => (
                    <a key={item.id} className="transition delay-100 hover:bg-amber-400 rounded-full px-4 py-2 text-lg" href={item.id}>{item.text}</a>
                ))}
            </div>
        </nav>
    )
}

export default NavBar;