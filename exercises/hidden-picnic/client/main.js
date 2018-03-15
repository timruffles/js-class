import React from "react"
import ReactDOM from "react-dom"
import {Game} from "./State";
import {App} from "./App";

const e = React.createElement;

main();

function main() {

    const game = new Game();

    ReactDOM.render(
        e(App, {
            game,
            state: game.state,
        }),
        document.getElementById('root')
    );
}

