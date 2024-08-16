 

class AppError extends Error{
    constructor(
        name,
        message,
        explanation,
        StatusCodes
        
    ){
        super();
        this.name=name;
        this.message=message;
        this.explanation=explanation;
        this.StatusCodes=StatusCodes;
    }
}

modul.exports= AppError;