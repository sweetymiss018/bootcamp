const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")

dotenv.config();

const connectDb  = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n Mongodb Connected || DB Host! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongodb Connection Failed!",error)
        process.exit(1);
    }
}

module.exports = connectDb