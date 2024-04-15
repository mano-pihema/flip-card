import { useQuery } from "@tanstack/react-query"
import { getCards } from "../api/cards"
import Card from "./Card"
import { Stack, Typography } from "@mui/material"


function Home () {

  const {data,isError,error,isPending} = useQuery({queryKey:['fetch'],queryFn:()=>getCards()})

  if(isPending) return(<h3>Loading...</h3>)
  if(isError) return (<div>{error.message}</div>)

    console.log(data)

  return (
    <>
      <Typography variant="h4">Wordlist</Typography>
      <Stack spacing={2}>
        {data.map(({id,word,answer}:{id:number,word:string,answer:string})=>(
          <Card key={id} {...{word,answer}}/>
        ))}
      </Stack>
    </>
    
  )
}

export default Home