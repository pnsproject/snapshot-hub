import { AbiItem } from 'web3-utils';

const abi: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'string',
        name: 'keyIndex',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string'
      }
    ],
    name: 'NewKey',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ResetRecords',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'keyHash',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string'
      }
    ],
    name: 'Set',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'SetName',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddr',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nftTokenId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'SetNftName',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: 'keys',
        type: 'string[]'
      }
    ],
    name: 'addKeys',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'key',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'get',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'keyHash',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getByHash',
    outputs: [
      {
        internalType: 'string',
        name: 'value',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'keyHash',
        type: 'uint256'
      }
    ],
    name: 'getKey',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: 'keys',
        type: 'string[]'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getMany',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'keyHashes',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getManyByHash',
    outputs: [
      {
        internalType: 'string[]',
        name: 'values',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address'
      }
    ],
    name: 'getName',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'nftAddr',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'nftTokenId',
        type: 'uint256'
      }
    ],
    name: 'getNftName',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'keyHash',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'value',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'setByHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'keyHashes',
        type: 'uint256[]'
      },
      {
        internalType: 'string[]',
        name: 'values',
        type: 'string[]'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'setManyByHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'nft',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'nftTokenId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'nameTokenId',
        type: 'uint256'
      }
    ],
    name: 'setNftName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

export default abi;
