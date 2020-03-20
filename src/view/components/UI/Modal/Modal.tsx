import React, { Component } from "react";
import './Modal.css'
import { Backdrop } from "../Backdrop/Backdrop";

interface Props {
    show: boolean
    modalClosed: ()=> void
}
export class Modal extends Component<Props>{

    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateX(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}