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
      // url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
    },
    // mumbai: {
    //   url: process.env.MUMBAI_RPC_URL,
    //   // url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    //   accounts: {
    //     mnemonic: [process.env.PolyTestMnemonic],
    //   },
    //   chainId: 80001,
    // },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
};
