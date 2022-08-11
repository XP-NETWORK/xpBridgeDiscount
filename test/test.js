const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Basic Deploy Conditions - Public Functions", function () {
  before(async function () {
    this.CONTRACT_FACTORY = await ethers.getContractFactory("xpBridgeDiscount");
  });

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    this.contract = await this.CONTRACT_FACTORY.deploy(
      "0x4bfD1B11026B93344Ec7F497C21f2B7D2d613c57"
    );
    await this.contract.deployed();
  });

  it("contract supports specific token", async function () {
    expect((await this.contract.token()).toString()).to.equal(
      "0x4bfD1B11026B93344Ec7F497C21f2B7D2d613c57"
    );
  });
});
