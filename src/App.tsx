import './App.css';
import {Header} from "./layaut/header/Header";
import {Main} from "./layaut/sections/main/Main";
import {Skills} from "./layaut/sections/skills/Skills";
import {Works} from "./layaut/sections/works/Works";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
