
const {Statuscodes} =require('http-status-codes')

const {Booking}= require('../models/index');
const { ValidationError } = require('../utils/errors');

 
class BookingRepository{
    async create (data){
        try {
            const booking  = await Booking.create(data);
            return booking
        } catch (error) {
            if(error.name==='sequelizeValidationError'){
                throw  new ValidationError(error)
            }
            throw new  AppError(
                'RepositryError',
                'Cannot create booking',
                'There  new ValidationError'(error)
            )


            
        }
    }

    async  update(data){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports= BookingRepository