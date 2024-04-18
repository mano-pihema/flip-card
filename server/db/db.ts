import db from './connection'

export function fetchCards() {
  return db('cards').select()
}

export function addCard(newWord) {
  return db('cards').insert(newWord)
}

export function removeCard(id) {
  return db('cards').where('id',id).del()
}

export function editCard(card){
  const{id,word,answer} = card
  return db('cards').where('id',id).update({word,answer})
}