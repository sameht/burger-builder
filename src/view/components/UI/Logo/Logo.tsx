import React,{ Component } from "react";
import './Logo.css';
import burgerLogo from "../../../../assets/images/burger-logo.png"
interface Props{

}

export class Logo extends Component<Props>{
    render(){
        return(
            <div className="Logo">
                <img src={burgerLogo} alt="My Burger"/>
            </div>
        );
    }

}