import React, { Component } from "react";
import './DrawerToogle.css';
interface Props {
    clicked: ()=>void
}

export class DrawerToogle extends Component<Props>{
    render() {

        return (

            <div className="DrawerToggle" onClick={()=>this.props.clicked()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }

}