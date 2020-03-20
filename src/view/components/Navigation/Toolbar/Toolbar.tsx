import React, { Component } from "react";
import './Toolbar.css';
import { Logo } from "../../UI/Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
interface Props {

}

export class Toolbar extends Component<Props>{
    render() {
        return (
            <header className={"Toolbar"}>
                <div>MENU</div>
                <Logo/>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </header>
        );
    }

}