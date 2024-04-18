import express  from "express";

import { addCard, editCard, fetchCards, removeCard } from "../db/db";

const router = express.Router()

router.get('/',(req,res)=>{
  fetchCards()
  .then((cards)=>res.json(cards))
  .catch((err)=>res.status(500).send('DATABASE ERROR: ' + err.message))
})

router.post('/',(req,res)=>{
  addCard(req.body)
  .then(()=>res.sendStatus(201))
  .catch((err)=>res.status(500).send('DATABASE ERROR: ' + err.message))
})

router.delete('/',(req,res)=>{
  removeCard(req.body.id)
  .then(()=>res.sendStatus(200))
  .catch((err)=>res.status(500).send('DATABASE ERROR: ' + err.message))
})

router.patch('/',(req,res)=>{
  editCard(req.body)
  .then(()=>res.sendStatus(200))
  .catch((err)=>res.status(500).send('DATABASE ERROR: ' + err.message))
})
export default router