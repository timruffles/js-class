

import React from "react";
import { STATES } from "./State"

const e = React.createElement;


export class App extends React.Component {
    render() {
       if(this.props.state === STATES.PLACING) {
           return e("h1", {}, "Placing");
       } else {
           return e("h1", {}, "Other");
       }
    }
}