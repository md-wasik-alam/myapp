import mongoose from "mongoose"

const connectDb = handler => async (req,res) => {
    if(mongoose.connection.readyState){
        return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req,res);
}

export default connectDb