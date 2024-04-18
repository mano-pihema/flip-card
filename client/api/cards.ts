import request from "superagent"
import { NewCard ,UpdateCard } from "../../models/card"

const serverUrl = '/api/v1/cards'

export function getCards() {
  return request.get(serverUrl).then((res)=>res.body)
}

export function postCard(newWord:NewCard) {
  return request.post(serverUrl).send(newWord)
}

export function deleteCard(id:number) {
  return request.delete(serverUrl).send({id})
}

export function changeCard(updateCard:UpdateCard) {
  return request.patch(serverUrl).send(updateCard)
}