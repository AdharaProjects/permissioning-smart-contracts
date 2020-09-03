const  Web3 = require("web3")
const enodeLib = require("../../lib/enode.js")

exports.command = 'remove <enode>'
exports.desc = 'Remove <enode> from allowlist'
exports.builder = {}

exports.handler = async (argv) => {
  try {
    nr = await require("../../lib/setup.js").nodeRules(argv)

    enode = enodeLib.utils.parse(argv.enode)

    tx = await nr.removeEnode(enode.enodeHigh, enode.enodeLow, enode.hostname, enode.port)

    if (tx.receipt && tx.receipt.status) {
      console.log("Removed")
    } else {
      throw new Error("error, check tx: " + tx.hash)
    }
  } catch (err) {
    throw err
  }
}
