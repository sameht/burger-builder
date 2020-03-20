import React,{ Component } from "react";
import './Layout.css';
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
interface Props{

}

export class Layout extends Component<Props>{
    render(){
        return(
            <div>
                <Toolbar></Toolbar>
                <div>toolBar SideDrawer backdrop</div>
                <main className="Layout-Content">
                    {this.props.children}
                </main>
            </div>
        );
    }

}