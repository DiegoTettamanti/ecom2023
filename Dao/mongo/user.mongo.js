import { UserModel } from ("./models/User")


class UserDaoMongo { // manager User
    constructor() {
        this.userModel = UserModel
    }

   
    get = async (limit=10, page=1)=> {
        try {
            return await this.userModel.paginate({ },{limit, page, lean: true})
            // return await this.userModel.find({})            
        } catch (error) {
            return new Error(error)
        }
    }

    create = async (newUser)=> {
        try {
            
            // return await this.userModel.create(newUser)
            return newUser
        } catch (error) {
            
            return new Error(error)
        }
    }
}

export default UserDaoMongo
