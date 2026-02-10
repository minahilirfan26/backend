import { Router } from "express";
import uploads from "./controllers/post.js";
import multer from "multer";

let uploadRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    cb(null, 'src/modules/upload/file/')
  },
  filename: function (req, file, cb) {
    const uniqueId = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${uniqueId}-${file.originalname}`)
   
  }
})

const upload = multer({ storage: storage })

uploadRouter.post('/', upload.single('files')  ,uploads)

export default uploadRouter