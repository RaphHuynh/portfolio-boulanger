function ButtonPrimary(arg){
    return (
        <a href={arg.url} rel="noreferrer" className="transition delay-150 box-border px-5 py-2 mr-5 border-2 rounded-full border-amber-500 text-center text-amber-500 text-xl bg-zinc-50 hover:bg-amber-500 hover:text-zinc-50">{arg.name}</a>
    )
}

export default ButtonPrimary;