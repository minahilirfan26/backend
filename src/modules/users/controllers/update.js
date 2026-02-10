import updateData from "../services/update.js";

let update = async (req, res)=>{
  try{
      let {id} = req.params;
    let user = await updateData(id, req.body);
      res.status(200).send({status: 200, user: user})
}catch(err){
    console.log(err)
res.status(400).send({status: 400, message: "internal error", error: err.message})
}
}

export default update