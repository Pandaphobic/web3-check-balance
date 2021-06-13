import { Container, TextField, Button } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import logo from "./mhlogo.svg"

import React from "react"
import "./App.css"

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    fontFamily: "Rajdhani",
    fontSize: 19
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Container maxWidth="sm">
            <TextField
              autoFocus="true"
              id="outlined-full-width"
              label="Ethereum Wallet Address"
              style={{
                margin: 8
              }}
              placeholder="0x0000000000000000000000000000000000000000"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                style: {
                  fontWeight: 900
                },
                color: "secondary"
              }}
              InputProps={{
                style: {
                  color: "white"
                }
              }}
              inputProps={{
                style: {
                  color: "white"
                }
              }}
              variant="outlined"
              color="secondary"
            />

            <Button
              style={{
                margin: 8
              }}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Check Balance
            </Button>
            <Button
              style={{
                margin: 8
              }}
              size="medium"
              variant="outlined"
              color="primary"
            >
              Donate
            </Button>
          </Container>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
