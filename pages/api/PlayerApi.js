
import connectDb from "@/middleware/connectDb"
import Player from "@/models/Player"

const handler = async (req, res) => {
    if(req.method == "GET"){
        let data  = await Player.find()
        res.status(200).json({data})
    }
    else if(req.method == "POST"){
        let data = new Player({
            name:"Dhoni",
            age:40,
            no_of_matchs:300,
            odi_rank : "1st",
        })
        await data.save()
        res.status(200).json({data})
    }
    else{
        res.status(400).json({"msg":"invalid Request"})
    }
}

export default connectDb(handler)