
# PolygonDomainNameService
Domain Name Service on the polygon blockchain

This repository contains the smart contract code for a domain name service that has been deployed on the Polygon blockchain. The domain name service allows users to register and manage their own domain names on the Polygon blockchain.


# Features


1. Register new domain names
2. Transfer ownership of a domain name to another address
3. Set the dns records for a domain name
4. Set the address associated with a domain name


## Requirements
A wallet, such as Metamask or WalletConnect


## Installation
Clone this repository:

git clone https://github.com/frankcodedKing/PolygonDomainNameService

## Install the dependencies:

npm install

## Compile the smart contract:

npm run compile

## Deploy the smart contract to the Polygon blockchain:

npx hardhat run scripts/run.js
