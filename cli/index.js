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
     'node-ingress': {
       description: 'Node Ingress Contract Address',
       required: true,
       alias: 'n',
     },
   })
  .demandCommand()
  .help()
  .argv
