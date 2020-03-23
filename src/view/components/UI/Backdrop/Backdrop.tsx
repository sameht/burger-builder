import React, { Component } from "react";
import './Backdrop.css'
interface Props{
    show:boolean
    clicked : ()=>void
}
export class Backdrop extends Component<Props>{
    render(){
        const Backdrop =this.props.show ? <div className="Backdrop" onClick={()=>this.props.clicked()}></div> : null
        return(
            <div>
                {Backdrop}
            </div>
            
        )
    }
}