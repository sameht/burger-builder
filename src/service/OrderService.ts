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
                        rs&&rs.data[id]&&rs.data[id].customer&&rs.data[id].customer.name, 
                        rs.data[id].customer?.email,
                        rs.data[id].customer?.deliveryMethod,
                        {street: rs.data[id].customer?.adress.street, zipCode: rs.data[id].customer?.adress.zipCode})
                        
                        let ingredients = []
                        for (let j=0; j<rs.data[id].ingredients?.length; j++){
                            let ingred=new Ingredient(rs.data[id].ingredients[j]._name, parseInt(rs.data[id].ingredients[j]._quantity))
                            ingredients.push(ingred)
                        }
                        let ord= new Order(id,customer, ingredients, rs.data[id].price)
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