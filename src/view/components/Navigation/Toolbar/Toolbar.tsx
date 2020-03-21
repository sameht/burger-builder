import React, { Component } from "react";
import './Toolbar.css';
import { Logo } from "../../UI/Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { DrawerToogle } from "../SideDrawer/DrawerToogle/DrawerToogle";
interface Props {
    DrawerToogleClicked: ()=>void
}

export class Toolbar extends Component<Props>{
    render() {
        return (
            <header className={"Toolbar"}>
                <DrawerToogle clicked={()=>this.props.DrawerToogleClicked()}></DrawerToogle>
                <div style={{height: "80%"}}><Logo/></div>
                <nav className="DesktopOnly">
                    <NavigationItems></NavigationItems>
                </nav>
            </header>
        );
    }

}