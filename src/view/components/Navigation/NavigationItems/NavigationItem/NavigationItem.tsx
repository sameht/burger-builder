import React, { Component } from "react";
import './NavigationItem.css';
import { NavLink } from "react-router-dom";

interface Props {
    link: string
    exact: boolean
}

export class NavigationItem extends Component<Props>{

    render() {
        return (

            <li className="NavigationItem">
                <NavLink
                    exact={this.props.exact}
                    to={this.props.link}
                    activeClassName='active'>
                    {this.props.children}
                </NavLink>
            </li>
        );
    }

}