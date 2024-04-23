import express  from "express"
import dotenv from 'dotenv'
dotenv.config()

const subRouter = express.Router()
let subs = {}

subRouter.post('/',(req,res)=>{
// eventually store subs here into a sub table
const subscription = req.body
subs = {...subscription}
res.sendStatus(201)
})


export {subRouter,subs}