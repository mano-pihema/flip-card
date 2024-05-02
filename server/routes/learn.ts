import express  from "express"
import dotenv from 'dotenv'
import OpenAI from 'openai'
import { addCard } from "../db/db"

dotenv.config()
const router = express.Router()

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
})

router.post('/', async (req,res)=>{
 const {text,targetLanguage} = req.body
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": `Translate to ${targetLanguage}`
      },
      {
        "role": "user",
        "content": text
      }
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  await addCard({word:response.choices[0].message.content,answer:text})

  res.sendStatus(201)
})

export default router
