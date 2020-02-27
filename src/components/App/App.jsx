import React, {useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {

    const [pageName, setPageName] = useState();
    return (
        <>
            <Header setPageName={setPageName}/>
            <Main pageName={pageName}/>
        </>
    );
}

export default App;
