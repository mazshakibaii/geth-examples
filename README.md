# Examples of Geth Scripts
This repository contains a collection of scripts that demonstrate how an auditor can extract financial data from a private Ethereum Virtual Machine (EVM) blockchain. The scripts provided here offer practical examples and techniques to retrieve and analyze financial information stored within a private EVM blockchain for auditing purposes.

## Introduction

Auditing financial transactions on a private EVM blockchain can be a challenging task, as the data is not readily accessible like in a traditional centralized database. However, by understanding how the ledger operates and leveraging tools such as [go-ethereum](https://github.com/ethereum/go-ethereum), auditors can effectively extract, analyze, and opine on blockchain-based financial data.

This repository aims to provide auditors with a starting point and reference implementation for accessing financial data from a private EVM blockchain. The two scripts included in this collection are:

1. `scripts/tokens-by-address.js`: This script fetches a list of tokens and balances for any given address on the private EVM blockchain.

2. `scripts/tokenholders-by-asset.js`: This script fetches a list of tokenholders and their balances for a particular asset (ERC-20 token) on the private EVM blockchain.
