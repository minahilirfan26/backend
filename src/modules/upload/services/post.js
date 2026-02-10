import { v2 as cloudinary } from 'cloudinary'
import ENV from '../../../constants/index.js'
import fs from 'fs-extra'


  cloudinary.config({ 
        cloud_name: ENV.CLOUD_NAME, 
        api_key: ENV.CLOUD_API_KEY, 
        api_secret: ENV.API_SECRET 
    });

let uploadFile = async(file)=>{
    // console.log(file)
   return new Promise((resolve, reject)=>{
     // Upload an image
cloudinary.uploader
       .upload(
           `src/modules/upload/file/${file.filename}`, {
              folder: 'ecommerce-store',
           },
           function (err, result){
            if(err){
                reject(err)
            }
       
fs.removeSync(`src/modules/upload/file/${file.filename}`);

          return  resolve(result)
           }
       );
   })
}
export default uploadFile;