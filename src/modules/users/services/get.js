import {getAll} from '../db/index.js'

const getData = async()=>{
return await getAll()
}

export default getData