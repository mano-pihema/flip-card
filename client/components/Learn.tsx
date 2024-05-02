import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import { FormEvent, useState } from "react"

import {Translation} from "../../models/learn"
import { learnWord } from "../api/learn"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { useMutation} from "@tanstack/react-query"


function Learn (){

  const [input,setInput] = useState<Translation>({text:'',targetLanguage:''})
  const navigate = useNavigate()
  const learnWordMutation = useMutation({mutationFn:()=>learnWord(input),onSuccess:()=>navigate('/')})

  // @ts-expect-error fix type later
  function handleChange(event) {
    const{name,value} = event.target
    setInput({...input,[name]:value})
  }

  function submitHandler(event:FormEvent) {
    event.preventDefault()
    learnWordMutation.mutate()
  }

  return (
  <>
    <div>Learn</div>
    <Box component="form" onSubmit={submitHandler} >
    
        <TextField required name="text" onChange={handleChange} />
        <InputLabel id="select-label">Languages</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label="targetLanguage"
          name="targetLanguage"
          value={input.targetLanguage}
          onChange={handleChange}
        >
          <MenuItem value={'Spanish'}>Spanish</MenuItem>
          <MenuItem value={'Maori'}>Maori</MenuItem>
          <MenuItem value={'Korean'}>Korean</MenuItem>
        </Select>
        <Button  type="submit">add</Button>     
    </Box>

  </> 
  )
}

export default Learn