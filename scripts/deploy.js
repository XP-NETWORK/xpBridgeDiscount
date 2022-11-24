async function main() {
    const { ethers } = require("hardhat");
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with this account:", deployer.address);
    console.log("Account ballance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("xpBridgeDiscount");
    const token = await Token.deploy("0x72224e65662EC8FF1112B823D4b648D2efa7b54B");   
  
    await token.deployed();
  
    console.log("Token address:", token.address);
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });