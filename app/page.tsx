import Image from "next/image";
import Footer from "./components/Contact/Footer";
import Navbar from "./components/Header/Navbar"
import Invitation from "./components/Header/Invitation"
import AboutMe from "./components/AboutMe/AboutMe"
import TechStack from "./components/TechStack/TechStack"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact";

export default function Home() {

    return (
        <div className="flex flex-col bg-base-200">
            <Navbar/>
            <Invitation/>
            <AboutMe/>
            <TechStack/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}
