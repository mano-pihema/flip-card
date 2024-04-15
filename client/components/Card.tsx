import { Box, Paper, Stack, Typography } from "@mui/material"

function Card({word,answer}:{word:string,answer:string}) {

  return (
    <Paper elevation={3} >
      <Stack direction="row" spacing={2} justifyContent={'space-evenly'}>
        <Box>
          <Typography>{word}</Typography>
          <p>Hint:</p>
        </Box>
        <Box>
          <Typography>{answer}</Typography>
          <input type="text" />
        </Box> 
      </Stack>
      
    </Paper>
  )
}

export default Card