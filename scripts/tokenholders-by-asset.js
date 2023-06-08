// Import 'web3' library used to interact with the Ethereum Virtual Machine
const Web3 = require('web3');
// Import the client's token standard contract
const ABI = require('path/to/erc20_abi.json');

// Connect to the local KPMG Geth node on Azure Linux VM
const web3 = new Web3('http://localhost:<rpc_port>');

// Define the ERC-20 token contract address (for client assets issued to private chain)
const tokenContractAddress = '0xTOKEN_CONTRACT_ADDRESS';

// Create an instance of the ERC-20 token contract
const tokenContract = new web3.eth.Contract(ABI, tokenContractAddress);

// Get the total supply of the ERC-20 token
tokenContract.methods.totalSupply().call()
  .then(totalSupply => {
    const addresses = [];

    // Iterate through each address to check the balance
    for (let i = 0; i < totalSupply; i++) {
      tokenContract.methods.balanceOfIndex(i).call()
        .then(balance => {
          if (balance > 0) {
            addresses.push({
              addressIndex: i,
              balance: balance
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

    // Print the addresses and their balances
    console.log(addresses);
    // OR
    // Save the array to a CSV file using the csv npm package.
    // https://www.npmjs.com/package/csv
  })
  .catch(error => {
    console.error(error);
  });
