import Paragraph from "./components/Paragraph";
import SubTitle from "./components/title/SubTitle";
import Card from "./components/Card/Card"

function Gallery(){
    return (
        <section className="flex flex-col min-h-screen w-full items-center justify-center" id="Gallery">
            <SubTitle
                subtitle={"Galleries"}
            /> 
            <Paragraph
                text={"Voici mes créations."}
            />
            <Card/>
        </section>
    )
}

export default Gallery;