const {StatusCodes}=require('http-status-codes');

class  ServiceError extends Error{
    constructor(
        message= 'something went a wrong ',
        explaination,
        StatusCodes=StatusCodes.Internal_Server_Error
    ){
        super();
        this.name= 'ServiceError',
        this.message= 'message',
        this.explaination='explaination'
        this.StatusCodes='statusCode'

    }
}