import React, { Component } from "react";
import './NavigationItem.css';

interface Props {
    active:boolean
    link: string
}

export class NavigationItem extends Component<Props>{

    render() {
        return (

            <li className="NavigationItem">
                <a href={this.props.link} 
                className={this.props.active ? "active":""}>
                {this.props.children}</a>
            </li>
        );
    }

}