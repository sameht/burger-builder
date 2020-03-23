import React, { Component, ReactNode } from "react";
import './Modal.css'
import { Backdrop } from "../Backdrop/Backdrop";

interface Props {
    show: boolean
    modalClosed: ()=> void
    children: ReactNode
}
interface State{}
export class Modal extends Component<Props,State>{

    shouldComponentUpdate(nextProps: Props){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    
    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={()=>this.props.modalClosed()}></Backdrop>
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