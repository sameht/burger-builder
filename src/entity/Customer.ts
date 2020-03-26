export class Customer{
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    
    private _deliveryMethod : string;
    public get deliveryMethod() : string {
        return this._deliveryMethod;
    }
    public set deliveryMethod(v : string) {
        this._deliveryMethod = v;
    }
    
    
    private _address : {street: string, zipCode: string};
    public get address() : {street: string, zipCode: string} {
        return this._address;
    }
    public set address(v : {street: string, zipCode: string}) {
        this._address = v;
    }

    constructor(name: string, email: string, deliveryMethod: string, address: {street: string, zipCode: string}){
        this._name=name
        this._email=email
        this._deliveryMethod=deliveryMethod
        this._address=address
    }
    
    
}
