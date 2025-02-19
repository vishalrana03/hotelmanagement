import mongoose from "mongoose"
import AWS from "aws-sdk"
import env from "../../infrastructure/env.js"

AWS.config.update({ 
    accessKeyId: env.AWS_ACCESS_ID, 
    secretAccessKey: env.AWS_SECRET_KEY, 
    region: 'ap-south-1' 
});

export const s3 = new AWS.S3()
async function dbConnection(){
    await mongoose
       .connect(env.MONGO_URL)
       .then(()=>{
        console.log("mongo dabase connected")
       })
       .catch((err)=>{
        console.log("Error while connecting mogoose",err)
       })
}

export default dbConnection