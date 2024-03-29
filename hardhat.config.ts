import { HardhatUserConfig } from "hardhat/config";
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import * as dotenv from 'dotenv'



dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
    },
    polygon: {
      url: process.env.POLYGON_MUMBAI_RPC_PROVIDER,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
}

export default config
