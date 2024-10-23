const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;
const products = require("./data/Products")
const mongoose = require("mongoose")


// connect db
mongoose
    .connect(process.env.MONGOOSEDB_URL)
    .then(()=>console.log("db connected"))
    .then((err)=>{
        err;
})

const database = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json())


// database seeder routes
app.use('/api/seed', database)

// routes for users
app.use('/api/users', userRoute)

// routes for products
app.use('/api/products', productRoute)

// routes for orders
app.use('/api/orders', orderRoute)


app.listen(PORT , () => {
    console.log(`server listening on port ${PORT}`);
});


// username: alezafazriliyadisudrajat
//password: z18TmuwXsmhUufbn
//mongodb+srv://alezafazriliyadisudrajat:z18TmuwXsmhUufbn@zaashop27.tjn9s.mongodb.net/e-commerce-zaa