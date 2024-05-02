import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, FormEvent, useState } from "react"
import { changeCard, postCard } from "../api/cards"
import {NewCard} from '../../models/card'
import { useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"

function AddCard ({edit ,id ,state}:{edit:boolean,id:number|null,state:()=>void}) {

  const[card,setCard] = useState<NewCard>({word:'',answer:''}) 
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const addMutation = useMutation({mutationFn:()=>postCard(card),onSuccess:()=>navigate('/')})
  // @ts-expect-error fetch works
  const editMutation = useMutation({mutationFn:()=>changeCard({...card,id}),onSuccess:()=>queryClient.invalidateQueries(['fetch'])})

  function submitHandler(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    edit?editMutation.mutate():addMutation.mutate()
    state()
  }

  function onChangeHandler(event:ChangeEvent<HTMLInputElement>) {
    const{value,name} = event.target
    setCard({...card , [name]:value})
  }
  return (
    <>
    <Typography variant="h4">{edit?'Edit Card':'Add Card'}</Typography>
      <form onSubmit={submitHandler}>
        <input type="text" name = "word" placeholder="enter a word" onChange={onChangeHandler}/>
        <input type="text" name = "answer" placeholder = "enter a answer" onChange={onChangeHandler}/>
        <button type="submit"> {edit?'Edit Card':'add Card'}</button>
      </form>
    </>
  )
}

export default AddCard