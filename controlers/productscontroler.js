// import fs from 'fs';
// //import {arrayProducts} from '../products.json';




// const products = (req, res) => {
//     res.render('auth/main', {
//         autenticado: false  
//     })
//     const arrayProducts = products;
//     const { idProduct } = req.params
//     const product = products.find(product => product.id === idProduct)
//     if(!product) return res.send("product not found")
//     res.send(
//         product
//     )
//     }

    
// //Class declaration
// export class ProductManager {
//     constructor(product){
//     this.path = path
 
    
// }
//     async getAll(){
//             try {
//                 const file = await fs.promises.readFile(this.path);

//                 const archivoConvertido = JSON.parse(file)
//                 const product = file

//                  return archivoConvertido

//             } catch (error) {
//                     const array = [];
//                     await fs.promises.writeFile(this.path, JSON.stringify(array))
//                 return array
//             }
// }

//     async addProduct(objeto){
//         try {
            
//                 const elementos =  await this.getAll()
                
//                 const nuevoId   = elementos.lenght === 0 ? 0 : elementos[elementos.lenght -1]
                
//                  objeto.id = nuevoId;
//                  objeto['id'] = nuevoId;
//                 const nuevoObjeto = {...objeto, 'id': nuevoId};

//                 const elementosJson = JSON.stringify(nuevoObjeto, null, 4)

//                 await fs.promises.writeFile(this.path, elementosJson)

//                 return nuevoId

//         } catch (error) {
//             console.log(error)
//             return error
//         }


//     }
// }







export {
    products
}