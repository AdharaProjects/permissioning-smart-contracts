const contract = require('@truffle/contract')
const  Web3 = require("web3")

const NodeRules = contract(require('../../src/chain/abis/NodeRules.json'))
const NodeIngress = contract(require('../../src/chain/abis/NodeIngress.json'))

exports.nodeRules = async (argv) => {
  let provider = new Web3.providers.HttpProvider(argv.host)
  NodeRules.setProvider(provider)
  NodeRules.defaults({
    from: argv.from,
  })
  NodeIngress.setProvider(provider)
  NodeIngress.defaults({
    from: argv.from,
  })

  ni = await NodeIngress.at(argv.nodeIngress)
  rules = await ni.getContractAddress(Web3.utils.stringToHex("rules"))
  return await NodeRules.at(rules)
}
