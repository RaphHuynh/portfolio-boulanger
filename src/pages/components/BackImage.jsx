import backimage from "../../assets/baguette.svg"

function BackImage(){
    return (
        <div className="fixed right-0 bottom-0 flex items-center justify-center w-full h-screen -z-10">
            <img src={backimage} alt="pain" className="h-screen w-full"/>
        </div>
    )
}

export default BackImage;