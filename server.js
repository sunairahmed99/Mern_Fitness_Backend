const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path:'./Config.env'})

const DB = process.env.DATABASE

mongoose.connect(DB).then(doc => console.log('connected')).catch(err => console.log(err))

const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log('listening to 9000')
})