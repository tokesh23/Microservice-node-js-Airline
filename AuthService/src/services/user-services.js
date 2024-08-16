const UserRepository = require("../repository/user-repository");

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const { JWT_KEY } = require('../config/serverConfig.js');
const { response } = require("express");
const AppErrors = require("../utils/error-handlers.js");

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            if (error.name=='SequelizeValidationError')
                throw error
               
            console.log("something went an wrong in the service layer");
            throw new AppErrors(
                'ServerError',
                'Something went  wrong in service ',
                'Logical issue found',
                500
            )
          
        }
    }
    async signIn(email, plainPassword) {
        try {
            const user = await this.userRepository.getByEmail(email)
            const passwordsMatch = this.checkPassword(plainPassword, user.password);
            if (!passwordsMatch) {
                console.log("Password doesn't match");
                throw { error: 'Incorrect password' };

            }
            const newJWT = this.createToken({ email: user.email, id: user.id });
            return newJWT;

        } catch (error) {

            if(error.name==='AttributeNotFound'){
                throw error
            }
            console.log("Something went wrong in the sign in process");
            throw error;

        }
    }

    async isAuthicated(token) {
        try {
            const response = this.verifyToken(token);
            if (!response) {
                throw { error: 'Invalid token' }
            }
            const user = await this.userRepository.getById(response.id);
            if (!user) {
                throw { error: "No user with the corresepanding token existr" }

            }
            return user.id
        } catch (error) {
            console.log('something went wrong in the auth process')
            throw error;

        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1d' });
            return result
        } catch (error) {
            console.log("something went  wrong in token creation")

            throw { error }

        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went a wrong in token validation", error)
            throw { Error }

        }
    }
    checkPassword(userInputplainPassword, encrypPassword) {
        try {
            return bcrypt.compareSync(userInputplainPassword, encrypPassword)
        } catch (error) {
            console.log("something wnet a wrong in password comparison")

        }
    }
    isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId)
        } catch (error) {
            console.log("something went  in server  layer")
        }
    }

}

module.exports = UserService;
