async function main() {
    const { ethers } = require("hardhat");
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with this account:", deployer.address);
    console.log("Account ballance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("xpBridgeDiscount");
    const token = await Token.deploy("0xcb5B72Bb2EE416D1Db533edc569282BA1b30805b");   
  
    await token.deployed();
  
    console.log("Token address:", token.address);
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });