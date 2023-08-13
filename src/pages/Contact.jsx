import { useState } from "react";
import SubTitle from "./components/title/SubTitle";

function Contact(){
    const [formData, setFormData] = useState({name: "",email: "",message: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };

    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen w-full px-10 md:px-44" id="Contact">
                <SubTitle
                    subtitle={"Contactez-moi"}
                />
                <form name="formContact" onSubmit={handleSubmit} className="flex flex-col z-10">
                    <label forHTML="sujectMail">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
                    <label forHTML="mail">Mail</label> 
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}></input>
                    <label forHTML="contentMail">Contenu</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                    <input type="submit" value="Envoyer" className="cursor-pointer" ></input>
                </form>
            </section>
        </>
    )
}

export default Contact;