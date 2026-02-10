import deleteData from "../services/delete.js";

let del = async(req, res)=>{
try{
    let {id} = req.params;
await deleteData(id);
res.status(200).send({message: "user deletd"})
}catch(err){
    res.status(404).send({error: err.message})
}
}

export default del