export const sample_abi =[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "added_next",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "added_next",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "ret_id",
        "type": "bytes32"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "next_addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "mrp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "packof",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct conV1.Product",
        "name": "ret_data",
        "type": "tuple"
      }
    ],
    "name": "details",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "removed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ret_value",
        "type": "bool"
      }
    ],
    "name": "verify",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "Products",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "next_addr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "date",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "mrp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "packof",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_expiry",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_mrp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_packof",
        "type": "uint256"
      }
    ],
    "name": "create",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "remove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "add_next",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "verify_user",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "get_details",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]