import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import { FormEvent, useState } from "react"
import {Translation} from "../../models/learn"
import { learnWord } from "../api/learn"
import { useNavigate } from "react-router-dom"
import { Button, FormControl, Stack, Typography } from "@mui/material"
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
    <Typography variant="h4">Learn</Typography>
    <Box component="form" onSubmit={submitHandler} >
      <Stack direction="row" spacing={2}>
        <Box>
          <InputLabel id="select-label">Translate a Word</InputLabel>
          <TextField required name="text" onChange={handleChange} /> 
        </Box>
        <Box>
        <InputLabel id="select-label">Languages</InputLabel>
        <FormControl sx={{ minWidth: 120 }}>
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
          </FormControl>
          <Button  type="submit">add</Button>
        </Box>
      </Stack>     
    </Box>

  </> 
  )
}

export default Learn