import Web3 from 'web3';
import abi from './abis/pns';
import { keccak_256 as keccak256 } from 'js-sha3';

function sha3(data: string) {
  return '0x' + keccak256(data);
}

export function getNameHash(name: string) {
  let node = '0000000000000000000000000000000000000000000000000000000000000000';

  if (name) {
    const labels = name.split('.');

    for (let i = labels.length - 1; i >= 0; i--) {
      const labelSha = keccak256(labels[i]);
      node = keccak256(Buffer.from(node + labelSha, 'hex'));
    }
  }

  return '0x' + node;
}

const web3 = new Web3('https://rpc.api.moonbeam.network');
const PNS = new web3.eth.Contract(abi, process.env.PNS_CONTRACT);

export async function getKey(name: string, key: string): Promise<string> {
  const tokenId = getNameHash(name);
  return await PNS.methods.get(key, tokenId).call();
}
