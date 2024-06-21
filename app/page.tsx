import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header"
import Invitation from "./components/Invitation"
import AboutMe from "./components/AboutMe"
export default function Home() {

    return (<>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <Invitation/>
                <AboutMe/>
                <Footer/>

            </div>
        </>

    );
}
