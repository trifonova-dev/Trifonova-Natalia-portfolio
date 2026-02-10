import './App.css'
// import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
        </div>
    )
}

export default App

