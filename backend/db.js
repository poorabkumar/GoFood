const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://poorab:ashu1234@cluster0.koffqzs.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoURI = 'mongodb://poorab:ashu1234@ac-fmsppkn-shard-00-00.koffqzs.mongodb.net:27017,ac-fmsppkn-shard-00-01.koffqzs.mongodb.net:27017,ac-fmsppkn-shard-00-02.koffqzs.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-wzyrk3-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    
    const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items = fetchedData;
    
    const catData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.foodCategory = catData;
  
    // console.log(global.food_items);
  } catch (error) {
    console.log('err: ', error);
  }
  
};

module.exports = mongoDB;