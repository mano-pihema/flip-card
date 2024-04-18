import { Box, Paper, Stack, Typography} from "@mui/material"
import {useState } from "react"

function Card({word,answer}:{word:string,answer:string}) {

  const [isFlipped,setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }
  const flipStyle = {
    p:1,
    m:1,
    height:'80%',
    textAlign: 'center',
    transition: 'transform 0.7s ease',
    ...(isFlipped ? { transform: 'rotateY(180deg)'} : {}),
  }

  return (
    <Box >
      <Stack direction="row" spacing={2} justifyContent={'space-evenly'} display={'flex'}>
        <Box flex={1}  >
          <Paper
            sx={{
              ...flipStyle
            }}
            onClick={handleFlip}
          >
            <Typography sx={{
             ...flipStyle
            }}>{isFlipped ? answer : word}</Typography>
    
          </Paper>
        </Box>
      </Stack>
      
    </Box>
  
  )
}

export default Card
