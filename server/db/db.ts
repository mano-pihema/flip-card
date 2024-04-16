import db from './connection'

export function fetchCards() {
  return db('cards').select()
}

export function addCard(newWord) {
  return db('cards').insert(newWord)
}