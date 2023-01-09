require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://powerful-muddy-seed.matic-testnet.discover.quiknode.pro/04a79c9e504493d833c7e8cdb49c2cb60f57d923/",
      accounts: ["61deab34a899277742e521d5e59d8978918549f524021422acf76fd5b298b7e5"],
    }
  }
};
