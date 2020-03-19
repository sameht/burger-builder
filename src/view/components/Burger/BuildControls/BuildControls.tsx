import React, { Component } from "react";
import './BuildControls.css';
import { BuildControl } from "./BuildControl/BuildControl";

interface Props {
    ingredientAdded:(ingredientLabel: string)=>void
    ingredientRemoved:(ingredientLabel: string)=>void
}
export class BuildControls extends Component<Props>{
    private controls: {label: string, type: string}[]
    constructor(props:any){
        super(props);
        this.controls=[
            {label: "Salad", type:"salad"},
            {label: "Meat", type:"meat"},
            {label: "Cheese", type:"cheese"},
            {label: "Bacon", type:"bacon"}
        ]
    }
    render() {
        return(
            <div className="BuildControls">
                {this.controls.map(ctr => {
                    return <BuildControl 
                        added={()=>this.props.ingredientAdded(ctr.label)} 
                        removed={()=>this.props.ingredientRemoved(ctr.label)}
                        label={ctr.label}></BuildControl>
                })}
            </div>
        );
    }

}