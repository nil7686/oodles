require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/9c708a56edfc40b5b249bc92e9e1eb85`,
      accounts:['a3db847155c8ce29757e5469c5f96eb7eefc8568ab652b87694ec78221ac5d31'],
    }
  }
};

// hardhat.config.js

//require('@nomiclabs/hardhat-ethers');
//require('@openzeppelin/hardhat-upgrades');

//module.exports = {
  //solidity: "0.8.9",
//};