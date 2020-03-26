import Axios from './AxiosOrder'
import { Ingredient } from '../entity/Ingredient'

export class IngredientService{

    public static getIngredients():Promise<Ingredient[] >{
        const getOrderPromise = new Promise<Ingredient[] >((resolve, reject) => {
            let ingredients : Ingredient[] =[]
            Axios.get('https://react-my-burger-df2a5.firebaseio.com/ingredients.json').then((rs) => {
                console.log(rs)
                for (const name in rs.data){
                    ingredients.push(new Ingredient(name, rs.data[name]))
                }
                resolve(ingredients)
            }).catch((error) => {
                reject(error)
            })
        })

        return getOrderPromise
    }
}