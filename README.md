# Solidity "Hello World" contract
A Solidity contract that allows users to write and read a single String value.
Check out the whole tutorial here: https://medium.com/@a.a.lechner/create-and-deploy-a-solidity-contract-to-avalanche-with-hardhat-2c5cd5e4fa93

## Setup

- Install the dependencies with `npm install`
- Create a file `secrets.js` with this content:
    ```
  module.exports = {
      AVALANCHE_TEST_PRIVATE_KEY: 'your private key for the avalanche fuji (test) network',
      AVALANCHE_MAIN_PRIVATE_KEY: 'your private key for the avalanche main network'
  } 
  ```
  
## Build
- run `npx hardhat compile`. This will create write the built contract files to `./artifacts`

## Deploy
- To the local network `npx hardhat run scripts/deploy.js --network local`
- To the test network `npx hardhat run scripts/deploy.js --network avalancheTest`
- to the main network (⚠️ Attention: deploying to Mainnet will cost you real money) `npx hardhat run scripts/deploy.js --network avalancheMain`


## Additional scripts
- Read the current message `npx hardhat run scripts/getMessage.js --network [network]`
