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
            padding:"10px",
            borderRadius:"10px",
          }
        }
      }
    }

  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container >
          <ResponsiveAppBar/>
          <Outlet/>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
