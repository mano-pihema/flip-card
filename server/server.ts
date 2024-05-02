import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import cards from './routes/cards'
import reminder from './routes/reminder'
import learn from './routes/learn'
import {subRouter} from './routes/sub'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express()

server.use(cors());

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/cards', cards)
server.use('/api/v1/reminder', reminder)
server.use('/api/v1/subscribe',subRouter)
server.use('/api/v1/learn',learn)


export default server

