const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const path = require('path')
dotenv.config();

//mongo connection 
require('./config/mongoDb')

//App config

const app = express();
const port = process.env.PORT || 3000;

//routes 
const productRoute = require('./routes/productR')
const categoryRoute = require('./routes/categoryR')
const subCategoryRoute = require('./routes/subCategory')
const orderRoute = require('./routes/orderR')


//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())


app.use('/products',productRoute);
app.use('/category',categoryRoute);
app.use('/subcategory',subCategoryRoute)
app.use('/order',orderRoute)


app.listen(port,()=>{
    console.log(`Server running on port : ${port}`)
})