import React from 'react';
import milk from './assets/images/milk.png';
import cool from './assets/images/cool.svg';
import './App.scss';
import { Button } from "./components/Button";

function App() {
    return (
        <div>
            <img className="image-size" src={milk} alt="Milk" />
            <img className="image-size" src={cool} alt="cool" />

            <div className="button-container">

                <Button role="button" tabIndex={1}>Bonjour</Button>

                <Button role="button" tabIndex={2}>Bonjour</Button>


            </div>

            <h1 className="title-heading">React+Typescript+📦!</h1>
        </div>
    )
}

export default App;
