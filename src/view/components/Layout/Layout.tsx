import React,{ Component } from "react";
import './Layout.css';
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../Navigation/SideDrawer/SideDrawer";
interface Props{

}

export class Layout extends Component<Props>{
    render(){
        return(
            <div>
                <Toolbar></Toolbar>
                <SideDrawer></SideDrawer>
                <div>toolBar SideDrawer backdrop</div>
                <main className="Layout-Content">
                    {this.props.children}
                </main>
            </div>
        );
    }

}