const  Web3 = require("web3")
const enodeLib = require("../../lib/enode.js")

exports.command = 'add <enode>'
exports.desc = 'Add <enode> to allowlist'
exports.builder = {}

exports.handler = async (argv) => {
  try {
    nr = await require("../../lib/setup.js").nodeRules(argv)

    enode = enodeLib.utils.parse(argv.enode)

    tx = await nr.addEnode(enode.enodeHigh, enode.enodeLow, enode.hostname, enode.port)

    if (tx.receipt && tx.receipt.status) {
      console.log("Added")
    } else {
      throw new Error("error, check tx: " + tx.hash)
    }
  } catch (err) {
    throw err
  }
}
