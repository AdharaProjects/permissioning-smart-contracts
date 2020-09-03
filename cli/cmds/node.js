exports.command = 'node <command>'
exports.description = 'Manage nodes'
exports.builder = function (yargs) {
  return yargs.commandDir('node_cmds')
}
exports.handler = function (argv) {}
