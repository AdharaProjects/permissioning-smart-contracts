const enodeLib = require("../../lib/enode.js")

exports.command = 'list'
exports.desc = 'list all nodes'
exports.builder = {}

exports.handler = async function (argv) {
  try {
    nr = await require("../../lib/setup.js").nodeRules(argv)

    size = await nr.getSize()
    for (var i = 0; i < size.toNumber(); i++) {
      enode = await nr.getByIndex(i)

      console.log(enodeLib.utils.toString(enode))
    }
  } catch (err) {
	console.log(err)
  }
}
