import React, { Component } from "react";
import './BuildControls.css';
import { BuildControl } from "./BuildControl/BuildControl";

interface Props {
    ingredientAdded: (ingredientLabel: string) => void
    ingredientRemoved: (ingredientLabel: string) => void
    totalePrice: number
    purchasable: boolean
    ordred: ()=>void
}
export class BuildControls extends Component<Props>{
    private controls: { label: string, type: string }[]
    constructor(props: any) {
        super(props);
        this.controls = [
            { label: "Salad", type: "salad" },
            { label: "Meat", type: "meat" },
            { label: "Cheese", type: "cheese" },
            { label: "Bacon", type: "bacon" }
        ]
    }
    render() {
        return (
            <div className="BuildControls">
                <p>Current Price: {Number(this.props.totalePrice.toFixed(2))} </p>
                {this.controls.map((ctr, index) => {
                    return <BuildControl
                        key={(index + (Math.random()))}
                        added={() => this.props.ingredientAdded(ctr.label)}
                        removed={() => this.props.ingredientRemoved(ctr.label)}
                        label={ctr.label}></BuildControl>
                })}

                <button
                    disabled={!this.props.purchasable}
                    className="OrderButton"
                    onClick={()=>this.props.ordred()}>
                    ORDER NOW
                </button>
            </div>
        );
    }

}