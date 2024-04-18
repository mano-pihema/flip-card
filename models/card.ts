export interface NewCard {
  word:string
  answer:string
}

export interface Results {
  correct:number
  wrong:number
  total:number
}

export type UpdateCard  = Pick<NewCard,'answer'|'word'> & {id:number}