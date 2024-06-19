import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header"

export default function Home() {
    return (<>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <div className="h-12 bg-stone-950"></div>
                <main className="flex-grow p-8 bg-zinc-900">
                    <section id="about">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <p className="mt-4">Welcome to my portfolio. Here you will find information about my projects
                            and experience.</p>
                    </section>
                    <section id="projects" className="mt-8">
                        <h2 className="text-2xl font-bold">Projects</h2>
                        <p className="mt-4">Here are some of my projects.</p>
                    </section>
                    <section id="contact">
                        <h2 className="text-2xl font-bold">Contact</h2>
                        <p className="mt-4">You can reach me via email at example@example.com.</p>
                    </section>
                </main>
                <Footer/>

            </div>
        </>

    );
}
