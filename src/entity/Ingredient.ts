export class Ingredient{
    
    
    private _quantity : number;
    public get quantity() : number {
        return this._quantity;
    }
    public set quantity(v : number) {
        this._quantity = v;
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    constructor(name: string, quantity: number){
        this._name=name;
        this._quantity=quantity
    }
}