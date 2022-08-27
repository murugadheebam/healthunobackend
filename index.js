const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors');

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
    origin: '*'
}));
// mongoose.connect("mongodb://localhost:27017/reactnew", {
//   useNewUrlParser: "true",
// })
// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected")
// })
var UsersRoutes = require('./routes/userroutes');

app.use('/users', UsersRoutes);

app.listen(5000, () => {
    console.log("Server has started!")
})