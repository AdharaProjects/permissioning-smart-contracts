const  Web3 = require("web3")

exports.utils = {
  toString: (enode) => {
    enodeHigh = enode.enodeHigh.substring(2)
    enodeLow = enode.enodeLow.substring(2)
    ip = Web3.utils.hexToString(enode.ip)
    port = enode.port.toNumber()
    return `enode://${enodeHigh}${enodeLow}@${ip}:${port}`
  },

  parse: (enodeUrl) => {
    url = new URL(enodeUrl)
    pub = url.username

    return {
      enodeHigh: '0x' + pub.substring(0, pub.length/2),
      enodeLow: '0x' + pub.substring(pub.length/2),
      hostname: url.hostname,
      port: url.port
    }
  }
}

