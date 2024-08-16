const {Statuscodes} = require ('http-status-codes');

class validationError extends  Error {
    constructor(error) {
        super();
        let explaination = []
       error.errors.forEach((err)=>{
        explaination.push(err.message)
       });
       this.name = 'ValidationError';
       this.name = 'Not able to validation the data sent  in the reqest'
       this.explaination= explaination;
       this.statuscodes= Statuscodes.BAD_REQUEST

    }
}

modul.exports= validationError;