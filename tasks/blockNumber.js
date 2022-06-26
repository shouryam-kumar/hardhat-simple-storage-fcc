const { task } = require("hardhat/config")

task("blockNumber", "Prints current block number ").setAction(
    async (taskArgs,hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block no. is ${blockNumber}`)
    }
)

module.exports ={}