import express from 'express'
import dotenv from 'dotenv'
import router from './routes/user.routes';
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config();
const app =express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser)
app.use('/user',router)
export {app}