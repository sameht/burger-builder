import React, { Component } from "react";
import './SideDrawer.css';
import { Logo } from "../../UI/Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { Backdrop } from "../../UI/Backdrop/Backdrop";

interface Props {
    closed: ()=>void
    open: boolean
}

export class SideDrawer extends Component<Props>{
    render() {
        let style=null
        if(this.props.open){
            style="Open"
        }else{
            style="Close"
        }
        return (
            <div>
                <Backdrop clicked={()=>this.props.closed()} show={this.props.open}></Backdrop>
                <div className={["SideDrawer", style].join(' ')}>
                    <div className="SideDrawerLogo"><Logo /></div>
                    <nav>
                        <NavigationItems></NavigationItems>
                    </nav>
                </div>
            </div>
        );
    }

}