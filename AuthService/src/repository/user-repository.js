 
const { User,Role } = require("../models/index")

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something went a wrong  on repository layer",error);

        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id:userId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong on repository layer",error);

        }
    }

    async getById(userId){
        try {
            const User = await User.findByPk(userId,{
                attributes:['email','id']
            })
        } catch (error) {
            console.log("something went wrong on repository layer",error)
            throw {error}
            
        }
    }
    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where:{
                    email:userEmail
                }
            })
            return user;
        } catch (error) {
            console.log("something went a wrong on repository layer",error);
            throw error
            
        }
    }
    async isAdmin(userId){
        try {
           const user =await User.findByPk(userId)
           const adminRole =  await Role.findOne({
            where:{
                name:'ADMIN'
            }
           })
           return  user.hasRole(adminRole);
            
        } catch (error) {
                console.log("something went a wrong  on repositroy  a layer",error)
                throw error;
            
        }
    }
}

module.exports= UserRepository;