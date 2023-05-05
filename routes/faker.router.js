import { Router } from 'express'
import { generateUser } from('../utils/faker')

const router = Router()

router.get('/mockingproducts', (req, res)=>{
    let products = []

    // for la cantidad de usuario
    for(let i = 0; i<100; i++){
        // generateUser()
        products.push(generateUser())
    }

    res.send({
        status: 'success',
        payload: products
    })
})

export default router

