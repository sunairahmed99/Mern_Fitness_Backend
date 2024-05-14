const HandleDevelopmentError = (err,res) =>{

    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        error:err,
        stack:err.stack
    })
}

const HandleProductionError = (err,res) => {

    if(err.isOperational == true){

        res.status(err.statusCode).json({
            status:err.status,
            message:err.message
        })

    }
    else{

        res.status(500).json({
            status:"error",
            message:"server down try later"
        })
    }
}



module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500
    err.status = 'fail' || 'error'

    if(process.env.DB_ENV === 'Development'){

        HandleDevelopmentError(err,res)
    }
    else if(process.env.DB_ENV === 'Production'){

        let error = {...err}

        HandleProductionError(err,res)
    }

}