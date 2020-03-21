import React, { Component } from "react";
import './Button.css'
interface Props {
    btnType: string
    clicked: () => void
}
export class Button extends Component<Props>{
    constructor(props: Props) {
        super(props)

    }

    render() {

        return (
            <button className={["Button", this.props.btnType].join(' ')}
                onClick={()=>this.props.clicked()}>
                {this.props.children}
            </button>

        )
    }
}