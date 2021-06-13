import { Container, TextField, Button, Typography } from "@material-ui/core"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import logo from "./mhlogo.svg"

import React from "react"
import "./App.css"
import { useState } from "react"

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
  const [walletAddress, setWalletAddress] = useState("0x0000000000000000000000000000000000000000")
  const [walletBalance, setWalletBalance] = useState("0.00")

  const onChangeWalletAddress = event => {
    setWalletAddress(event.target.value)
  }

  const handleCheckBalance = () => {
    console.log("Check Balance pushed")
  }

  const handleDonate = () => {
    console.log("Donate pushed")
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Container maxWidth="sm">
            <Typography color="secondary" variant="h2" component="h2" gutterBottom>
              {walletBalance} ETH
            </Typography>
            <TextField
              onChange={onChangeWalletAddress}
              autoFocus="true"
              id="outlined-full-width"
              label="Ethereum Wallet Address"
              style={{
                margin: 8
              }}
              placeholder={walletAddress}
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
              onClick={handleCheckBalance(walletAddress)}
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
              onClick={handleDonate}
              style={{
                margin: 8
              }}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Donate
            </Button>
          </Container>
          <Button
            startIcon={<GitHubIcon color="primary" />}
            onClick={e => {
              e.preventDefault()
              window.location.href = "http://google.com"
            }}
            style={{
              margin: 8
            }}
            size="small"
            variant="outlined"
            color="primary"
          >
            Github
          </Button>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
