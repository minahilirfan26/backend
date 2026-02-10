import getData from "../services/get.js"

const get = async (req,res)=>{
try{
    let user = await getData()
    res.status(200).send({status: 200, user: user})
}catch(err){
    console.log(err)
res.status(400).send({status: 400, message: "internal error", error: err})
}
}
export default get