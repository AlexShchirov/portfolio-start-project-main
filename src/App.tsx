import './App.css';
import {Header} from "./layaut/header/Header";
import {Main} from "./layaut/sections/main/Main";
import {Skills} from "./layaut/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
