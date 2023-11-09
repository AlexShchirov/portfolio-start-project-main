import './App.css';
import {Header} from "./layaut/header/Header";
import {Main} from "./layaut/sections/main/Main";
import {Skills} from "./layaut/sections/skills/Skills";
import {Works} from "./layaut/sections/works/Works";
import {Testimony} from "./layaut/sections/testimony/Testimony";
import {Contact} from "./layaut/sections/contacts/Contacts";
import {Slogan} from "./layaut/sections/slogan/Slogan";
import {Footer} from "./layaut/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;
