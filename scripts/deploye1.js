// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const MyToken = await ethers.getContractFactory('MyToken');
  console.log('Deploying MyToken ...');
  const mytoken = await upgrades.deployProxy(MyToken,  { initializer: 'initialize' });
  await mytoken.deployed();
  console.log('mytoken deployed to:', mytoken.address);
}

main();

//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0