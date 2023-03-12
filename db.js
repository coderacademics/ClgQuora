const mongoose = require('mongoose');
const durl = 'mongodb+srv://saikat_2003:etaclghub.com@logindetails.tzysdxq.mongodb.net/?retryWrites=true&w=majority';
const dparameters = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const connectToMongoDB = () => {
    mongoose.connect(durl, dparameters).then(() => {
        console.log("Connection successful");
    }).catch((e) => {
        console.log("Connection failed!!");
    })
}
module.exports = connectToMongoDB;
