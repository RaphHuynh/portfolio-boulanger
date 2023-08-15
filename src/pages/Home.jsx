import Paragraph from "./components/Paragraph";
import FirstTitle from "./components/title/FirstTitle"
import SubTitle from "./components/title/SubTitle"
import photoProfil from "../assets/loic_boulangerie.jpg"
import ButtonPrimary from "./components/Button/ButtonPrimary";
import CV from "../assets/cv_loic_thierry.pdf"

function Home(){

    return (
        <section className="flex gap-10 justify-center items-center min-h-screen w-full px-10 md:px-44" id="Home">
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
                <div className="flex">
                    <ButtonPrimary
                        url={CV}
                        name={"CV"}
                    />
                    <ButtonPrimary
                        url={"https://www.linkedin.com/in/loïc-thierry-4a296117b/?originalSubdomain=fr"}
                        name={"CONTACTEZ MOI"}
                    />
                </div>
            </article>
            <aside className="hidden 2xl:flex w-full">
                <img src={photoProfil} alt="photo Loïc Thierry" className="rounded-xl h-96 shadow-lg mr-0 ml-auto dark:sepia"/>
            </aside>
        </section>
    )
}

export default Home;
