import React,{ Component } from "react";
import './NavigationItems.css';
import { NavigationItem } from "./NavigationItem/NavigationItem";

interface Props{

}

export class NavigationItems extends Component<Props>{
    render(){
        return(
            <ul className="NaviationItems">
                <NavigationItem link="/" active>Burger Builder</NavigationItem>
                <NavigationItem link="/" active={false}>Checkout</NavigationItem>
            </ul>
        );
    }

}