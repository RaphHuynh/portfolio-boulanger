import Image from "../../../assets/loic_boulangerie.jpg"
import Brioche from "../../../assets/brioche.jpg"
import Brioche2 from "../../../assets/brioche2.jpg"
import Brioche3 from "../../../assets/brioche_coupee.jpg"
import Pain from "../../../assets/pain1.jpg"
import Pain1 from "../../../assets/pain2.jpg"
import Pain2 from "../../../assets/pain3.jpg"
import CardTag from "./CardTag"

function Card(){
    const image = [
        {url:Pain1,title:"Pain", tag:"Pain"},
        {url:Pain2,title:"Pain", tag:"Pain"},
        {url:Brioche,title:"Brioche", tag:"Brioche"},
        {url:Brioche2,title:"Brioche", tag:"Brioche"},
        {url:Brioche3,title:"Brioche", tag:"Brioche"}
    ]

    return (
        <article className="grid grid-cols-4 gap-4 w-full px-44">
            {image.map((item) => (
                <div className="bg-amber-50 border-gray-200 rounded-lg shadow pb-2">
                    <img src={item.url} className="object-cover h-72 w-full rounded-t-md"></img>
                    <h2 className="text-xl p-2 text-center">
                        {item.title}
                    </h2>
                    <div className="flex w-full justify-end">
                        <CardTag
                            name={item.tag}
                        />
                    </div>
                </div>
            ))}
        </article>
    )
}

export default Card;