import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./components/Header/Navbar"
import Invitation from "./components/Header/Invitation"
import AboutMe from "./components/AboutMe/AboutMe"
import TechStack from "./components/TechStack/TechStack"
export default function Home() {

    return (
            <div className="flex flex-col bg-base-200">
                <Navbar/>
                <Invitation/>
                <AboutMe/>
                <TechStack/>
                <Footer/>
            </div>
    );
}
