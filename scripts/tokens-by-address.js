// Import 'web3' library used to interact with the Ethereum Virtual Machine
const Web3 = require('web3');
// Import the client's token standard contract
const ABI = require('path/to/erc20_abi.json');

// Connect to the local KPMG Geth node on Azure Linux VM
const web3 = new Web3('http://localhost:<rpc_port>');

// Specify the address you want to check
const address = '0x0000000000000000';

// Define the ERC-20 token contract addresses (for client assets issued to private chain)
const tokenContractAddresses = ['TOKEN_CONTRACT_ADDRESS_1', 'TOKEN_CONTRACT_ADDRESS_2'];

// Iterate through each token contract
tokenContractAddresses.forEach(tokenContractAddress => {
  const tokenContract = new web3.eth.Contract(ABI, tokenContractAddress);

  // Fetch the balance of the address for the ERC-20 token
  tokenContract.methods.balanceOf(address).call()
    .then(balance => {
      console.log(`Address: ${tokenContractAddress} | Balance: ${balance}`);
      // AND/OR 
      // Create CSV file for extraction using the npm CSV package
      // https://www.npmjs.com/package/csv
    })
    .catch(error => {
      console.error(error);
    });
});
