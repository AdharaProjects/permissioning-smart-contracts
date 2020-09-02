const contract = require('@truffle/contract')
const  Web3 = require("web3")

const NodeRules = contract(require('../../src/chain/abis/NodeRules.json'))

exports.nodeRules = async (argv) => {
  let provider = new Web3.providers.HttpProvider(argv.host)
  NodeRules.setProvider(provider)
  NodeRules.defaults({
    from: argv.from,
  })
  return await NodeRules.at(argv.nodeRulesContract)
}
