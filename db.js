const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_PASSWORD ? `mongodb+srv://nikgadge111:${process.env.MONGO_PASSWORD}@cluster-vidly.g6ymjpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-vidly` : "mongodb://localhost/vidly";
const connect = async () => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB: " + dbUrl);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
