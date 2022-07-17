import { AVALANCHE_LOCAL_PRIVATE_KEY, AVALANCHE_MAIN_PRIVATE_KEY, AVALANCHE_TEST_PRIVATE_KEY } from "./secrets";
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    local: {
      url: 'http://localhost:16386/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43112,
      accounts: AVALANCHE_LOCAL_PRIVATE_KEY,
    },
    avalancheTest: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: AVALANCHE_TEST_PRIVATE_KEY
    },
    avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: AVALANCHE_MAIN_PRIVATE_KEY
    }
  }
};