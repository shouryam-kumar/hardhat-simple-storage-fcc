//imports
const { ethers, run } = require("hardhat")
require("dotenv").config({ path: ".env" });


async function main() {
  const  simpleStorageContractFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await simpleStorageContractFactory.deploy();
  await simpleStorage.deployed();

  console.log("contract deployed to ", simpleStorage.address);

  let currentValue = await simpleStorage.retrieve();
  console.log(`The current favorite no. is ${currentValue}`);
  await simpleStorage.store(7);

  const updatedValue = await simpleStorage.retrieve();
  console.log(`The current favorite no. is ${updatedValue}`);

  // verify
  // await simpleStorage.deployTransaction.wait(6);
  // await verify(simpleStorage.address, []);

}

// async function verify(contractAddress, args) {
//   console.log("Verifying Contract....");
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     })
//   } catch (e) {
//     if(e.message.toLowerCase().includes("already Verified")) {
//       console.log("Already Verified!");
//     } else {
//       console.log(e);
//     }
//   }
// }



main()
  .then(()=> {
    console.log("Deployed");
    process.exit(0);
  })
  .catch((err)=> {
    console.error(err);
    process.exit(1);
  })