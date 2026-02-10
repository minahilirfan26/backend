import { createData } from "../db/index.js"

const postData = async(data)=>{

return await createData(data)
}

export default postData