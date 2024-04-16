import request from "superagent"
import { NewCard } from "../../models/card"

const serverUrl = '/api/v1/cards'

export function getCards() {
  return request.get(serverUrl).then((res)=>res.body)
}


export function postCard(newWord:NewCard) {
  return request.post(serverUrl).send(newWord)
}