import React, { Component } from "react";
import './SideDrawer.css';
import { Logo } from "../../UI/Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { Backdrop } from "../../UI/Backdrop/Backdrop";

interface Props {

}

export class SideDrawer extends Component<Props>{
    render() {
        return (
            <div>
                <Backdrop clicked={()=>null} show></Backdrop>
                <div className="SideDrawer">
                    <div className="SideDrawerLogo"><Logo /></div>
                    <nav>
                        <NavigationItems></NavigationItems>
                    </nav>
                </div>
            </div>
        );
    }

}