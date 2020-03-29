import Axios from './AxiosOrder'
import { Order } from '../entity/Order'
import { Customer } from '../entity/Customer'
import { Ingredient } from '../entity/Ingredient'
export class OrderService{

    public static getOrders():Promise<Order[] >{
        const getOrderPromise = new Promise<Order[] >((resolve, reject) => {
            let orders : Order[] =[]
            Axios.get('/orders.json').then((rs) => {
                for (const id in rs.data){
                    let customer = new Customer(
                        rs.data[id]._customer._name, 
                        rs.data[id]._customer?._email,
                        rs.data[id]._customer?._deliveryMethod,
                        {street: rs.data[id]._customer?._address.street, zipCode: rs.data[id]._customer?._address.zipCode})
                        
                        let ingredients = []
                        for (let j=0; j<rs.data[id]._ingredients?.length; j++){
                            let ingred=new Ingredient(rs.data[id]._ingredients[j]._name, parseInt(rs.data[id]._ingredients[j]._quantity))
                            ingredients.push(ingred)
                        }
                        let ord= new Order(customer, ingredients, rs.data[id]._price)
                        orders.push(ord)
                }
                resolve(orders)
            }).catch((error) => {
                reject(error)
            })
        })

        return getOrderPromise
    }



    

    public static postOrder(order: Order):Promise<any>{
        return Axios.post('/orders.json', order)
    }
}