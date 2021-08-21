// FileName: truffle-config.js

const HDWalletProvider = require("@truffle/hdwallet-provider");
const APIKeys  = require('./.env');

module.exports = {
  networks: {
    development: {
      host: "172.25.48.1",
      port: 7545,
      network_id: "7545",
    },
    ganache: {
      host: "172.25.48.1",
      port: 7545,
      network_id: "*",
    },
    test: {
      host: "172.25.48.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: () => new HDWalletProvider(APIKeys.RopstenKey, `https://ropsten.infura.io/v3/`+ APIKeys.InfuraApiKey ),
      network_id: 3, 
      gas: 7000000, 
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 60 * 1000000000 // 60 Gwei
    },
    rinkeby: {
      provider: () => new HDWalletProvider(APIKeys.RinkebyKey, "https://rinkeby.infura.io/v3/" + APIKeys.InfuraApiKey ),
      network_id: 4, 
      gas: 29000000, 
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 10 * 1000000000 // 10 Gwei
    },
    mainnet: {
      provider: () => new HDWalletProvider(APIKeys.MainNetKey, `https://mainnet.infura.io/v3/` + APIKeys.InfuraApiKey ),
      gas: 6000000,
      network_id: 1,
      gasPrice: 10 * 1000000000 // 10 Gwei
    }

  },

  mocha: {
    useColors: true
  },

  compilers: {
    solc: {
      //version: "0.8.7",
      version: "0.6.12",
      docker: false,
      parser: "solcjs",
      settings: {
      optimizer: {
        enabled: false,
        runs: 200
      },
      }
    },

  },

  plugins: [
      'truffle-plugin-verify'
  ],

  api_keys: {   
    etherscan   : APIKeys.EtherscanApiKey,
    bscscan     : APIKeys.BscscanApiKey,
    hecoinfo    : APIKeys.HecoinfoApiKey,
    ftmscan     : APIKeys.FtmscanApiKey,
    polygonscan : APIKeys.PolygonscanApiKey
  }

} // END module.exports


