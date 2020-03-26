import { Ingredient } from "./Ingredient";
import { Customer } from "./Customer";

export class Order{
    
    private _ingredients : Ingredient[];
    public get ingredients() : Ingredient[] {
        return this._ingredients;
    }
    public set ingredients(v : Ingredient[]) {
        this._ingredients = v;
    }

    
    private _price : number;
    public get price() : number {
        return this._price;
    }
    public set price(v : number) {
        this._price = v;
    }

    
    private _customer : Customer;
    public get customer() : Customer {
        return this._customer;
    }
    public set customer(v : Customer) {
        this._customer = v;
    }
    
    constructor(customer: Customer, ingredients: Ingredient[], price: number){
        this._ingredients=ingredients;
        this._customer=customer;
        this._price=price
    }
    

}