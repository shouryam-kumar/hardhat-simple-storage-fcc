
const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", () => {
  let simpleStorageFactory;
  let simpleStorage;

  beforeEach(async function(){
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
    await simpleStorage.deployed()
  })

  it("should start with a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"

    //expect
    //assert

    assert.equal(currentValue.toString(), expectedValue)
  })

  // it.only would run only that test 
  it("Should update when we call store", async () => {
    const newValue = 7;
    await simpleStorage.store(newValue);
    const currentValue = await simpleStorage.retrieve()

    assert.equal(currentValue.toString(), newValue.toString());

  })
})