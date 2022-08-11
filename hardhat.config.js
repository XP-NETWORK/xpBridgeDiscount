require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")

const ALCHEMY_API_KEY = "qDt9cjvPgL-PpphIWQUi2AEIsIbFDtls";
const ROPSTEN_PRIVATE_KEY ="702f334707b8a62cb68d02c84bfe29472122edbfac0f6adda33252283c172315";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  networks: {
    binance: {
      url: "https://speedy-nodes-nyc.moralis.io/3749d19c2c6dbb6264f47871/bsc/testnet",
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: 'CKMH9CZMIMSWFTQ5RJ2PXHCESF28216DVF',
  },
}; 
