const mongoose = require("mongoose");

//mongodb://localhost:27017/CrudDB
//mongodb+srv://amarDB:Amardb@mydb-rabpp.mongodb.net/test?retryWrites=true&w=majority
// mongodb+srv://amarDB:Amardb@mydb.rabpp.mongodb.net/?retryWrites=true&w=majority&appName=MyDB
mongoose
  .connect(
    "mongodb+srv://amarDB:Amardb@mydb.rabpp.mongodb.net/?retryWrites=true&w=majority&appName=MyDB"
  )
  .then((res) => {
    console.log("MongoDB connection succeeded.");
  })
  .catch((err) => {
    console.log("Error in DB connection : " + JSON.stringify(err));
  });

module.exports = mongoose;
