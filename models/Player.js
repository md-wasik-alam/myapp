import mongoose from "mongoose"

const PlayerSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    no_of_matches:{type:Number},
    odi_rank:{type:String}
},{timestamps:true})

module.exports = mongoose.models.Player || mongoose.model("Player",PlayerSchema)

