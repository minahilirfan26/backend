import uploadFile from "../services/post.js"

let uploads = async (req,res)=>{
    try{
        // console.log("req.files======",req.file)
        let files = await uploadFile(req.file)
        res.send({message: "upload image", files})
    }catch(err){
        res.send({err: err.message})
    }
}

export default uploads