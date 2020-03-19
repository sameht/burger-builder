import React,{ Component } from "react";
import './Layout.css';
interface Props{

}

export class Layout extends Component<Props>{
    render(){
        return(
            <div>
                <div>jjjjjjjjjjjjjjjjjj</div>
                <main className="Layout-Content">
                    {this.props.children}
                </main>
            </div>
        );
    }

}