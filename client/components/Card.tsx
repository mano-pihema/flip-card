import { Box,IconButton, Paper, Typography} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import {useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCard } from "../api/cards"
import AddCard from "./AddCard";

function Card({id,word,answer}:{id:number,word:string,answer:string}) {

  const [isFlipped,setIsFlipped] = useState(false)
  const [isEdit,setIsEdit] = useState(false)

  const queryClient = useQueryClient()

  // @ts-expect-error fetch works
  const deleteMutation = useMutation({mutationFn:()=>deleteCard(id),onSuccess:()=>queryClient.invalidateQueries(['fetch'])})

  const flipStyle = {
    p:1,
    m:1,
    height:'80%',
    textAlign: 'center',
    transition: 'transform 0.7s ease',
    ...(isFlipped ? { transform: 'rotateY(180deg)'} : {}),
  }

  function handleDelete() {
    deleteMutation.mutate()
  }

  const childToggle = ()=> {setIsEdit(!isEdit)}

  return (
    <>
    <Box sx={{position:'relative' }}>
      <Box  sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}> 
      <IconButton aria-label="update"  onClick={()=>setIsEdit(!isEdit)}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete"  onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
      
    <Paper  sx={{...flipStyle }} onClick={()=>setIsFlipped(!isFlipped)}>
      <Typography sx={{
      ...flipStyle
      }}>{isFlipped ? answer : word}</Typography>
    </Paper>
    </Box>
    {
      isEdit&&<AddCard edit={isEdit} id = {id} state = {childToggle} />
    }

  </>
  )
}

export default Card
