import { Container, TextField, Button, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import QRious from "qrious"
import logo from "./mhlogo.svg";

import React from "react";
import "./App.css";
import { useState } from "react";

// Material UI Tweaks
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: "Rajdhani",
    fontSize: 20,
  },
});

// Web3 Setup
require("dotenv").config();
var Web3 = require("web3");
const url = process.env["REACT_APP_URL"];
console.log(url);
var web3 = new Web3(url);

function App() {
  // Declarign state variables for keeping track of wallet address and it's associated balance
  const [walletAddress, setWalletAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const [walletBalance, setWalletBalance] = useState("0.00");

  // Update the wallet address state anytime it changes
  function onChangeWalletAddress(event) {
    setWalletAddress(event.target.value);
  }

  // When button Check Balance Clicked
  function handleCheckBalance() {
    if (web3.utils.isAddress(walletAddress)) {
      // Use web3 to get the balance from wallaetAddress (*state var)
      web3.eth.getBalance(walletAddress, (err, bal) => {
        // Use web3 conversion utility to get value in ETH
        let balance = web3.utils.fromWei(bal);
        setWalletBalance(balance);
        // Show the error in the console
        if (err) return console.log(err);

        // If there's no error, return no error and the balance
        return null, bal;
      });
    } else {
      // Some "error handling"
      console.log("Inavlid Wallet Address");
    }
    console.log(`Wallet: ${walletAddress} has Balance: ${walletBalance}`);
  }

  // Handle the Donate button being clicked
  const handleDonate = () => {
    alert("0x0A48F377D3004DD3687Fa0c93d61596F20476996");
    var qr = new QRious({
      element: document.getElementById("qr"),
      value: "0x0A48F377D3004DD3687Fa0c93d61596F20476996"
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="midheavy-logo" /> */}
          <Container maxWidth="sm">
            <Typography
              color="secondary"
              variant="h3"
              component="h3"
              gutterBottom
            >
              {walletBalance} ETH
            </Typography>
            <canvas id="qr"></canvas>
            <TextField
              onChange={onChangeWalletAddress}
              autoFocus={true}
              id="outlined-full-width"
              label="Ethereum Wallet Address"
              style={{
                margin: 8,
              }}
              placeholder={walletAddress}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                style: {
                  fontWeight: 900,
                },
                color: "secondary",
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              variant="outlined"
              color="secondary"
            />

            <Button
              onClick={handleCheckBalance}
              style={{
                margin: 8,
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
                margin: 8,
              }}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Donate
            </Button>
            {/* <ModalComp /> */}
          </Container>
          <Button
            startIcon={<GitHubIcon color="primary" />}
            onClick={e => {
              e.preventDefault();
              window.location.href =
                "https://github.com/Pandaphobic/react-material-web3";
            }}
            style={{
              margin: 8,
            }}
            size="small"
            variant="outlined"
            color="primary"
          >
            github
          </Button>

          <p
            style={{
              fontFamily: "Rajdhani",
              fontWeight: "900",
              position: "absolute",
              fontSize: ".5em",
              fontWeight: "400",
              bottom: 0,
            }}
          >
            Chris Steffes - chrissteffes.crypto
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
