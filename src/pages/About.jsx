import Paragraph from "./components/Paragraph";
import SubTitle from "./components/title/SubTitle";
import Image from "../assets/loic_about.jpg"

function About(){
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-44" id="About">
            <SubTitle 
            subtitle={"A propos de moi"}
            />
            <article className="flex gap-10">
                <div className="text-justify w-2/3">
                    <Paragraph
                        text={"Chers visiteurs,"}
                    />
                    <Paragraph
                        text={"Je suis Thierry Loïc, mon histoire est celle d'un voyage de la maintenance industrielle à l'exploration culinaire, en quête d'une alternance enrichissante dans le domaine de la boulangerie."}
                    />
                    <Paragraph
                        text={"Pendant six années, j'ai plongé dans le monde de la maintenance industrielle. J'ai manipulé des machines sophistiquées, résolu des énigmes techniques et contribué au bon fonctionnement d'entreprises variées. Chaque jour apportait son lot de défis stimulants, mais au fil du temps, j'ai ressenti une envie irrépressible de laisser libre cours à ma créativité."}
                    />
                    <Paragraph
                        text={"La boulangerie est apparue comme une toile vierge où je pouvais peindre avec des saveurs et des arômes. Ce fut un tournant dans ma vie lorsque j'ai réalisé que je pouvais combiner ma passion pour la cuisine avec ma fascination pour la diversité culturelle. Mes propres origines hispaniques, mon amour pour la culture française et mon intérêt pour les délices asiatiques ont trouvé une voie d'expression dans l'art de la boulangerie."}
                    />
                    <Paragraph
                        text={"J'ai décidé de m'immerger dans ce nouveau domaine en quête d'une alternance qui m'offrirait l'opportunité de m'épanouir en tant que boulanger. J'ai investi du temps à la création de nouveaux produits. Cependant, mon désir d'apprendre ne s'est pas arrêté là !"}
                    />
                    <Paragraph
                        text={"Mon objectif est de trouver une alternance en boulangerie qui me permettra de travailler aux côtés de maîtres boulangers expérimentés. Je suis convaincu que cette expérience pratique, combinée à ma passion et à ma détermination, me permettra de développer mes compétences et d'acquérir une expertise dans ce domaine."}
                    />
                    <Paragraph
                        text={"Si vous êtes un professionnel de la boulangerie à la recherche d'un apprenti dévoué, je serais ravi de discuter. Mon désir d'apprendre, ma créativité et mon engagement envers l'excellence font de moi un candidat passionné et prêt à embrasser ce nouveau chapitre."}
                    />
                    <Paragraph
                        text={"Je vous invite à explorer mon site pour en savoir plus sur mes créations. Merci de m'accompagner dans cette aventure."}
                    />
                    <Paragraph
                        text={"Thierry Loïc, Aspirant Boulanger et Futur Créateur de Saveurs"}
                    />
                </div>
                <img src={Image} height={500} width={500} className="object-cover rounded-md grayscale"></img>
            </article>
        </section>
    )
}

export default About;