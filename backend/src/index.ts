import express, {Request, Response} from 'express'
import { dbConnection } from './config/db.config'
import 'dotenv/config'
import MongoSanitize from 'express-mongo-sanitize'
// import Morgan from 'morgan'
import indexRouter from './routes/index'
import passport from 'passport'
import expressSession from 'express-session'
import { passportInitialize } from './middleware/passport.middleware'

const app=express()
dbConnection()

app.use(expressSession({
    secret: 'test123#',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
  passportInitialize()
app.use(passport.initialize());
app.use(passport.session());

app.use(MongoSanitize())
// app.use(Morgan())

app.use(indexRouter)
app.get('/',(req:Request,res:Response)=>{
res.send('e-learning website')
})

const PORT= process.env.PORT ?? 8085

app.listen(PORT, ()=>{
    console.log('server is running at port ', PORT)
})