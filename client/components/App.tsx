import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "./ResponsiveAppBar"
import Container from "@mui/material/Container"
import { ThemeProvider, createTheme } from "@mui/material"


function App() {

  const theme = createTheme({
    components:{
      MuiPaper:{
        styleOverrides:{
          root:{
            display:'flex',
            height:'90%',
            alignItems:'center',
            justifyContent:'center',
            
          }
        }
      }
    }
  })


  return (
    <>
        <Container >
          <ResponsiveAppBar/> 
          <ThemeProvider theme={theme}>
          <Outlet/>
          </ThemeProvider>
        </Container>
     
    </>
  )
}

export default App
