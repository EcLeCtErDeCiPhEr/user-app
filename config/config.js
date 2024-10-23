const mongoose = require("mongoose");

require("dotenv").config();
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;