require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6gbfHkcrH1gSsMG8dQYbCK7WPtA1oNBy", // or Alchemy URL
      accounts: [
        "0xcf7a742fec9e562470e239cc976d177b9a3d91ae8603775939d35b22fbf8b46c",
      ],
    },
  },
  etherscan: {
    apiKey: "T8E6MYZMP9JFM7MECHCQ45ZGYEZ4I9DTH6",
  },
}
