import postData from "../services/post.js";


const post = async(req, res)=>{
try{
const user = await postData(req.body);
console.log(req.body)
res.status(200).send({status: 200, user})
}catch(err){
    console.log("err-----",err)
    res.status(500).send({status: 500, message: "internl server error", error: err.message
    })
}
}

export default post