require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require('dotenv').config()

const ALCHEMY_API_KEY = "qDt9cjvPgL-PpphIWQUi2AEIsIbFDtls";
const BINANCE_PRIVATE_KEY =process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  networks: {
    binance: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: [`0x${BINANCE_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: 'CKMH9CZMIMSWFTQ5RJ2PXHCESF28216DVF',
  },
}; 
