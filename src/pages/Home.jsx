import Paragraph from "./components/Paragraph";
import FirstTitle from "./components/title/FirstTitle"
import SubTitle from "./components/title/SubTitle"
import photoProfil from "../assets/loic_boulangerie.jpg"
import ButtonPrimary from "./components/Button/ButtonPrimary";

function Home(){

    return (
        <section className="flex gap-10 justify-center items-center min-h-screen w-full px-44" id="Home">
            <article className="">
                <FirstTitle
                    title={"Loïc Thierry"}
                />
                <SubTitle
                    subtitle={"Recherche d'une alternance pour un CAP boulangerie"}
                />
                <Paragraph
                    text={"J'ai pour ambition de devenir boulanger. Je souhaite suivre un programme complet pour maîtriser les techniques liées à ce domaine. (pétrissage, fermentation ... ). Mon objectif à court terme est de valider la formation ainsi que suivre après celle-ci une formation en pâtisserie. À long terme, j'envisage d'ouvrir un établissement mélangeant le savoir-faire français en boulangerie, pâtisserie avec des cultures exotiques telles que les pays asiatiques et hispaniques."}
                />
                <span>
                    <ButtonPrimary
                        url={""}
                        name={"CV"}
                    />
                    <ButtonPrimary
                        url={""}
                        name={"CONTACTEZ MOI"}
                    />
                </span>
            </article>
            <aside className="flex w-1/2">
                <img src={photoProfil} alt="photo Loïc Thierry" className="rounded-xl h-96 shadow-lg"/>
            </aside>
        </section>
    )
}

export default Home;
