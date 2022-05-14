import fetch from 'node-fetch';
import fleek from '@fleekhq/fleek-storage-js';
import pinataSDK from '@pinata/sdk';

const service = process.env.PINNING_SERVICE || 'pinata';
const serviceArweave = parseInt(process.env.SERVICE_ARWEAVE || '0');

const pinataApiKey: string = process.env.PINATA_API_KEY || '';
const pinataSecretKey: string = process.env.PINATA_SECRET_API_KEY || '';
const pinata = pinataSDK(pinataApiKey, pinataSecretKey);

const fleekApiKey: string = process.env.FLEEK_API_KEY || '';
const fleekSecretKey: string = process.env.FLEEK_API_SECRET || '';
const config: any = { apiKey: fleekApiKey, apiSecret: fleekSecretKey };

export async function pinJson(key: string, body) {
  let ipfsHash: string;

  if (service === 'fleek') {
    const input = config;
    input.key = key;
    input.data = JSON.stringify(body);
    const result = await fleek.upload(input);
    ipfsHash = result.hashV0;
  } else {
    const result = await pinata.pinJSONToIPFS(body);
    ipfsHash = result.IpfsHash;
  }

  if (serviceArweave) {
    fetch(`https://ipfs2arweave.com/permapin/${ipfsHash}`)
      .then(res => res.json())
      // .then(json => console.log('Arweave success', json))
      .catch(e => console.error('Arweave error', e));
  }

  return ipfsHash;
}
