import { deletedById } from "../db/index.js"

let deleteData = async(id)=>{
  return  await deletedById(id)
}

export default deleteData