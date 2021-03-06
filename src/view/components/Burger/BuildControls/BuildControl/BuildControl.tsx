import React, { Component } from "react";
import './BuildControl.css';

interface Props {
    label : string
    removed: () => void
    added: () => void
}
export class BuildControl extends Component<Props>{

    render() {
        return(
            <div className="BuildControl">
                <div className="Label">{this.props.label}</div>
                <button onClick={()=>this.props.removed()} className="Less">Less</button>
                <button onClick={()=>this.props.added()} className="More">More</button>
            </div>
        );
    }

}