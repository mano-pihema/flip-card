import { useMutation } from "@tanstack/react-query"
import { ChangeEvent, FormEvent, useState } from "react"
import { postCard } from "../api/cards"
import {NewCard} from '../../models/card'
import { useNavigate } from "react-router-dom"

function AddCard () {

  const[card,setCard] = useState<NewCard>({word:'',answer:''}) 
  const navigate = useNavigate()

  const addMutation = useMutation({mutationFn:()=>postCard(card),onSuccess:()=>navigate('/')})

  function submitHandler(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addMutation.mutate(card)
  }

  function onChangeHandler(event:ChangeEvent<HTMLInputElement>) {
    const{value,name} = event.target
    setCard({...card , [name]:value})
  }
  return (
    <div>
      <div>add Card</div>
      <form onSubmit={submitHandler}>
        <input type="text" name = "word" onChange={onChangeHandler}/>
        <input type="text" name = "answer" onChange={onChangeHandler}/>
        <button type="submit"> add card</button>
      </form>
    </div>
  )
}

export default AddCard