import './App.css';
import {Header} from "./layaut/header/Header";
import {Main} from "./layaut/sections/main/Main";
import {Skills} from "./layaut/sections/skills/Skills";
import {Works} from "./layaut/sections/works/Works";
import {Testimony} from "./layaut/sections/testimony/Testimony";
import {Contact} from "./layaut/sections/contacts/Contacts";
import {Slogan} from "./layaut/sections/slogan/Slogan";
import {Footer} from "./layaut/footer/Footer";
import { Particle } from './components/particle/Particle';
import { GoTopByn } from './components/goTopBtn/GoTopBtn';


function App() {
    return (
        <div className="App">
            <Particle/>
            
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopByn/>
        </div>
    );
}

export default App;
