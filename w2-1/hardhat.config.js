require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

// const PRIVATE_KEY1 = "0x.... YOUR PRIVATE KEY1";
// const PRIVATE_KEY2 = "0x....  YOUR PRIVATE KEY1";
// const Mnemonic = "YOUR Mnemonic";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
};