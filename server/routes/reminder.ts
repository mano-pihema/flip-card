import express  from "express"
import cron from 'node-cron'
import PushNotifications from 'node-pushnotifications'
import {subs} from './sub'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

const settings = {
  web: {
    vapidDetails: {
      subject: "mailto:m.raankin@gmail.com", 
      publicKey:process.env.VAPID_PUBLIC,
      privateKey:process.env.VAPID_PRIVATE,
    },
    gcmAPIKey: "gcmkey",
    TTL: 2419200,
    contentEncoding: "aes128gcm",
    headers: {},
  },
  isAlwaysUseFCM: false,
};
// @ts-expect-error fix type later
const push = new PushNotifications(settings)

router.post('/',(req,res)=>{

  const {mins,hours} = req.body
  const timing = '*/'+mins+' '+'*'+' '+'* * *'
  console.log(timing)
  cron.schedule(timing,()=>{
    
    const data = {
      title: `reminder set`,
      body:`reminder set for ${'minutes'+mins+'and'+hours+'hours'}`
    }
    // @ts-expect-error fix type later
    push.send(subs,data,(err,result)=>{
      if (err) {
        console.error('Error sending mock notification:', err)
        //res.status(500).send('Error sending mock notification')
      } else {
        console.log('Mock notification sent successfully:', result)
       // res.sendStatus(200)
      }
    })
  })
  res.sendStatus(200)

})

export default router