const {StatusCodes}= require('http-status-codes')




class AppErrors extends Error {
    constructor(
        name= 'AppError',
        message= 'something went a wrong',
        explaintaion = 'something INTERNAL_SERVER,ERROR'
    ){
        super();
        this.message=message,
        this.explaintaion=explaintaion,
        this.name=name,
        this.StatusCodes = StatusCodes
    }
}

module.exports= AppErrors