import * as React from "react";
import "primereact/resources/primereact.min.css"; 
import {Hero, About, Education, Works, Skills, Work, Contact, Footer} from '../components';

function Main () {

    return (
        <>
            <Hero />
            <About />
            <Education />
            <Work />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </>
    )
}

export default Main;