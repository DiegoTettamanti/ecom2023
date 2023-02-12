import { promises } from 'fs';

const path = 'src/products.json';

class ProductManager{
    constructor(){
        this.path = path
    }

    readFile = async () => {
        try {
            const data = await promises.readFile(this.path, 'utf8');

            return JSON.parse(data);
        } catch (error) {
                return []
                           }
    }  
    
    getProducts = async () => {
        try {
            return await this.readFile()
        } catch (error) {
            return 'No se encuentran productos';
        }
    }        

    getProductsById =  (id) => {
        try {
            const products = this.readFile
            return products.find(product => product.id === id)

        } catch (error) {
            
        }
    }    



}