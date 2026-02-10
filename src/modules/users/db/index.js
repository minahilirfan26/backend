import User from '../model/index.js'

let getAll = async()=>{
let user = await User.find()
return user
}

const createData = async (data) => {
    const user = new User(data);
    user.save()
    return user;
};

const deletedById = async (id)=>{
const user = await User.findByIdAndDelete(id)
return user
}

const updateById = async(id,data)=>{
    let user = await User.findByIdAndUpdate(id, {...data} )
    return user
}


export {
    getAll,
    createData,
    deletedById,
    updateById
    
}