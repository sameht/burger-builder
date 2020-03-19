import React,{ Component } from "react";
import { Burger } from "../../components/Burger/Burger";
import { Ingredient } from "../../../entity/Ingredient";

interface State{
    ingredients: Ingredient[]
}
interface Props{

}

export class BurgerBuilder extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state={
            ingredients : [
                new Ingredient("Meat", 1),
                new Ingredient("Cheese", 2),
                new Ingredient("Salad", 1),
            ]
            
        }
    }
    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>

            </div>
        );
    }

}