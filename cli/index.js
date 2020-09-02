#!/usr/bin/env node
require('yargs')
  .env("PERM")
  .commandDir('cmds')
  .options({
     'host': {
       description: 'Ethereum host',
       required: true,
       alias: 'H',
     },
     'from': {
       description: 'Ethereum Account to run transactions',
       required: false,
       alias: 'a',
     },
     'node-rules-contract': {
       description: 'Node Rules Contract Address',
       required: true,
       alias: 'n',
     },
   })
  .demandCommand()
  .help()
  .argv
