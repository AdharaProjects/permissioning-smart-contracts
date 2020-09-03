# perm CLI tool

## Usage

At the moment it only supports node operations:
```
perm node <command>

Manage nodes

Commands:
  perm node add <enode>     Add <enode> to allowlist
  perm node list            list all nodes
  perm node remove <enode>  Remove <enode> from allowlist

Options:
  --version           Show version number                              [boolean]
  --host, -H          Ethereum host                                   [required]
  --from, -a          Ethereum Account to run transactions
  --node-ingress, -n  Node Ingress Contract Address                   [required]
  --help              Show help                                        [boolean]
```

### Node connection details
The easiest way to use the tool is by exporting these envvar:

```
PERM_FROM=0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73
PERM_HOST=http://phoenixnet-ethsigner.k8s.dev.adhara.zone:80
PERM_NODE_INGRESS=0xfE0B7EE21e8298fC68b9Bf5f404e7df7B6671EC2
```

## Installation
* pull this repo
* `npm install`
* `npm run build:contracts` (smart contracts need to be compiled)
* `npm link` (creates a symbolic link in your $PATH to the cli tool script)

