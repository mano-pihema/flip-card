import { Box, Paper, Stack, TextField, Typography} from "@mui/material"
import { useEffect, useState } from "react"

function Card({word,answer}:{word:string,answer:string}) {

  const [isFlipped,setIsFlipped] = useState(false)
  const [check,setCheck] = useState('')
  

  const paperStyle = {
    textAlign: 'center',
    transition: 'transform 0.7s ease',
  };
  
  const flippedStyle = {
    transform: 'rotateY(180deg)',
  };
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    console.log(check);
  }, [check]); 

  return (
    <Box >
      
      <Stack direction="row" spacing={2} justifyContent={'space-evenly'} display={'flex'}>
        <Box flex={1}  >
          <Paper
            sx={{
              ...paperStyle,
              ...(isFlipped ? flippedStyle : {}),
            }}
            onClick={handleFlip}
          >
            <Typography sx={{
              ...paperStyle,
              ...(isFlipped ? flippedStyle : {}),
            }}>{isFlipped ? answer : word}</Typography>
    
          </Paper>
        </Box>
        <Box flex={1} paddingLeft={2} component={'form'}  >
          <TextField
           size="small"
            id="outlined-controlled"
            label="Enter answer"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                setCheck(event.target.value)
                handleFlip()
              } 
              }
            }      
            />

          <Typography >hint</Typography>
         
        </Box> 
      </Stack>
      
    </Box>
  
  )
}

export default Card
