import { faker } from '@faker-js/faker'

faker.local = 'es'



const generateProducts = ()=>{
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        departament: faker.commerce.department(),
        stock: faker.random.numeric(1),
        description: faker.commerce.productDescription(),
        id: faker.database.mongodbObjectId(),
        image: faker.image.image(),
        code: faker.datatype.string(10) // Agregar campo para el código del producto
    }
}

export default generateProducts