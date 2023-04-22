var contractAbi = [
	
	
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "index",
					"type": "uint256"
				}
			],
			"name": "Added",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_productId",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "info",
					"type": "string"
				}
			],
			"name": "addState",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_a",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_b",
					"type": "string"
				}
			],
			"name": "concat",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_text",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_date",
					"type": "string"
				}
			],
			"name": "newItem",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_productId",
					"type": "uint256"
				}
			],
			"name": "searchProduct",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	
	
]; // Paste Contract Here

var contractAddress ='0x57f724f2a67f3eD1a7b62cbAC52b50d7C7caf230'; // Paste Address here