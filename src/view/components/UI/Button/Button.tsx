import React, { Component } from "react";
import './Button.css'
interface Props {
    btnType: string
    clicked: (clickEvent:any) => void
}
export class Button extends Component<Props>{

    render() {

        return (
            <button className={["Button", this.props.btnType].join(' ')}
                onClick={(event)=>this.props.clicked(event)}>
                {this.props.children}
            </button>

        )
    }
}
