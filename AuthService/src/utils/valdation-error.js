

const { Model } = require('sequelize');
const AppError = require('./error-handler')
const {StatusCodes}= require('http-status-codes')


class validationError extends AppError{
    constructor(error){
            let errorName=error.name;
            let explanation=[]
            error.errors.forEacch((err)=>{
                extension.push(err.message)
            });
            super{
                errorName,
                'Not able to validation the data  in the request',
                explanation,
                StatusCodes.BAD_REQUEST

            }
    }
}

Model.exports=validationError;