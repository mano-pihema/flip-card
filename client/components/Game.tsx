import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getCards } from "../api/cards"
import Paper from "@mui/material/Paper"
import { NewCard, Results } from "../../models/card"
import Result from "./Result"


function Game()  {
const {data,isError,error,isPending} = useQuery({queryKey:['fetch'],queryFn:()=>getCards()}) 
const [isFlipped,setIsFlipped] = useState(false)
const [input,setInput] = useState('')
const [iteration,setIteration] = useState(0)
const [showResults,setShowResults] = useState(false)
const [card, setCard] = useState<NewCard | null>(null)
const [result,setResult] = useState<Results>({wrong:0,correct:0,total:4}) 

useEffect(() => {
  if (data && data.length > 0) {
    setCard(data[iteration]);
    
  }
}, [data, iteration]);

const paperStyle = {
  textAlign: 'center',
  transition: 'transform 0.7s ease',
}

const flippedStyle = {
  transform: 'rotateY(180deg)',
  background:(input==card?.answer?'green':'red')
}

function handleKeyDown(event) {

  if(event.key === 'Enter'){
    event.preventDefault()
    setInput(event.target.value)
    setResult(event.target.value==card?.answer?{...result,correct:result.correct+1}:{...result,wrong:result.wrong+1})
    setIsFlipped(true)
    next() 
  }
}

function next() {
  setTimeout(()=>{
    setIsFlipped(false)
    if(iteration==data.length-1){
      setShowResults(true)
     }
    setCard(data[iteration])
    setIteration(iteration+1)    
  },1500)
   
}
if(isPending) return(<h3>Loading...</h3>)
if(isError) return (<div>{error.message}</div>)

return (
<>
{!showResults &&
<Box p={2} >
    <Stack direction="row" spacing={2} justifyContent={'space-evenly'} display={'flex'}>
    <Box flex={1}  >
          <Paper
            sx={{
              ...paperStyle,
              ...(isFlipped ? flippedStyle : {}),
            }}
    
          >
            <Typography sx={{
              ...paperStyle,
              ...(isFlipped ? flippedStyle : {}),
            }}>{isFlipped ? card?.answer : card?.word}</Typography>
    
          </Paper>
        </Box>
      <Box flex={1} paddingLeft={2} component={'form'}  >
        <TextField
         size="small"
          id="outlined-controlled"
          label="Enter answer"
          onKeyDown={handleKeyDown}      
          />
        <Typography >hint</Typography>
       
      </Box> 
    </Stack>
  </Box>}
  {showResults&&<Result {...result}/>}

</>
  
)

}

export default Game
