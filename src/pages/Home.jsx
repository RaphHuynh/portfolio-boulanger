import Paragraph from "./components/Paragraph";
import FirstTitle from "./components/title/FirstTitle"
import SubTitle from "./components/title/SubTitle"
import photoProfil from "../assets/loic_boulangerie.jpg"

function Home(){

    return (
        <section className="flex gap-10 justify-center items-center min-h-screen w-full px-20" id="Home">
            <article className="w-2/3">
                <FirstTitle
                    title={"Loïc Thierry"}
                />
                <SubTitle
                    subtitle={"Recherche d'une alternance pour un CAP boulangerie"}
                />
                <Paragraph
                    text={"J'ai pour ambition de devenir boulanger. Je souhaite suivre un programme complet pour maîtriser les techniques liées à ce domaine. (pétrissage, fermentation ... ). Mon objectif à court terme est de valider la formation ainsi que suivre après celle-ci une formation en pâtisserie. À long terme, j'envisage d'ouvrir un établissement mélangeant le savoir-faire français en boulangerie, pâtisserie avec des cultures exotiques telles que les pays asiatiques et hispaniques."}
                />
            </article>
            <aside className="flex">
                <img src={photoProfil} alt="photo Loïc Thierry" className="rounded-xl h-96 "/>
            </aside>
        </section>
    )
}

export default Home;
