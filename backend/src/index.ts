import express, {Request, Response} from 'express'
import { dbConnection } from './config/db.config'
import 'dotenv/config'
import MongoSanitize from 'express-mongo-sanitize'
// import Morgan from 'morgan'

const app=express()
dbConnection()

app.use(MongoSanitize())
// app.use(Morgan())

app.get('/',(req:Request,res:Response)=>{
res.send('e-learning website')
})

app.listen(process.env.PORT, ()=>{
    console.log('server is running at port ', process.env.PORT)
})