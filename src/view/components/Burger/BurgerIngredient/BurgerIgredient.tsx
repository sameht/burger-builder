import React,{ Component } from "react";
import './BurgerIngredient.css';

interface Props{
    type: string
}

export class BurgerIngredient extends Component<Props>{
    render(){
        let ingredient = null

        ingredient = <div className={this.props.type}></div>


        return(
            ingredient
        );
    }

}

