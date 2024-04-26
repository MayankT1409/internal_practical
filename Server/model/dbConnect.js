import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

let connection= 'mongodb+srv://mangala214128pa:maggi12@cluster0.u3upwel.mongodb.net/photoGallery'

mongoose.connect(connection).then(()=>console.log("DB is Connected with Server".bgRed)).catch((err)=>console.log(err))

export default mongoose