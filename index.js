import chalk from 'chalk';
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose';
import ENV from './src/constants/index.js';
import router from './src/router/index.js';
import cors from 'cors'

const app = express();
app.use(helmet())
app.use(express.json())
app.use(cors())
mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@minahilcluster.fllh4ha.mongodb.net/${ENV.DB_NAME}?appName=minahilCluster`)

mongoose.connection.on("open",()=>{
    console.log(chalk.bgGreen.white.bold("db is connected"))
})

app.use('/api', router)



app.get('/', (req,res)=>{
    res.send("hello world")
})


app.listen(4000, ()=>{
    console.log("server is runing on port")
})