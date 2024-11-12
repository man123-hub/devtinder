const mongoose = require("mongoose");
  const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://manthan123:root123@namastenode.dbtc6.mongodb.net/devtinder23"
    );
  };
  
  module.exports = connectDB;
  