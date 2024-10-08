import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js';

dotenv.config({
    path: './.env'
})

connectDB().then(() => {

    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`sever is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("mongoconnection error", err);
})


// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error
//         })
    
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`sever is running at port : ${process.env.PORT}`);
//         })  
//     }catch(error){
//         console.log("ERROR", error);
//         throw error
//     }
// })()