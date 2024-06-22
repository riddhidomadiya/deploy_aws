const mongoose = require("mongoose")

mongoose.connect(`${process.env.DB_URL}/test_deploy`)
.then(()=> {
    console.log("connection successfully");
})
.catch((e)=> {
    console.log(e, "error");
})