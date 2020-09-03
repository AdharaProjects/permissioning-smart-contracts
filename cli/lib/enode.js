const  Web3 = require("web3")

exports.utils = {
  toString: (enode) => {
    enodeHigh = enode.enodeHigh.substring(2)
    enodeLow = enode.enodeLow.substring(2)
    ip = hexToIp(enode.ip)
    port = enode.port.toNumber()
    return `enode://${enodeHigh}${enodeLow}@${ip}:${port}`
  },

  parse: (enodeUrl) => {
    url = new URL(enodeUrl)
    pub = url.username

    return {
      originalUrl: url,
      enodeHigh: '0x' + pub.substring(0, pub.length/2),
      enodeLow: '0x' + pub.substring(pub.length/2),
      hostname: getHexIpv4(url.hostname),
      port: url.port
    }
  }
}

function getHexIpv4(stringIp) {
  const splitIp = stringIp.split('.');
  return `0x00000000000000000000ffff${toHex(splitIp[0])}${toHex(splitIp[1])}${toHex(splitIp[2])}${toHex(splitIp[3])}`;
}

function toHex(number) {
  const num = Number(number).toString(16);
  return num.length < 2 ? `0${num}` : num;
}

const ipv4Prefix = '00000000000000000000ffff';

const hexToIp = (address) => {
  address = address.split('x')[1];
  return isIpv4(address) ? getIpv4(address) : getIpv6(address);
};

const isIpv4 = (address) => {
  return address.startsWith(ipv4Prefix) && parseInt(address.substring(ipv4Prefix.length), 16) <= 0xffffffff;
};

const getIpv4 = (address) => {
  return splitAddress(address.split(ipv4Prefix)[1], 2)
    .map(hex => {
      return parseInt(hex, 16);
    })
    .join('.');
};

const getIpv6 = (address) => {
  return splitAddress(address, 4).join(':');
};

const splitAddress = (address, digits) => {
  const bits = [];

  while (address.length >= digits) {
    bits.push(address.slice(0, digits));
    address = address.slice(digits);
  }
  return bits;
};
