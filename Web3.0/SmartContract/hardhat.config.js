//https://eth-sepolia.g.alchemy.com/v2/5CqYx1hIX6Z4FlKr0QguyNOCCTFaQfTK

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5CqYx1hIX6Z4FlKr0QguyNOCCTFaQfTK',
      accounts: ['853843005407114687233c29448018b8f2d870a05fe3f6bf0f4229fced3ce710'],
    }
  }
};
