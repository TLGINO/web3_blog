# Account types:

Ethereum has 2 different types of accounts, notably:

- Externally Owned Accounts (EOA) - controlled by anyone with access to the private key
- Contract Accounts - a Smart Contract, controlled by the contract's logic

## Externally Owned Accounts (EOA):

These are the afore mentioned accounts which you typically use when transferring crypto from one account to another. Typically you manage your EOA through a **Wallet** such as Metamask.

Wallets enable you to interface with the blockchain without the need for you to run a node locally.

Beware to choose a good wallet provider, as wallets are also vulnerable to [exploitation](https://medium.com/parity-hack-trace/parity-hack-and-153-037-stolen-eth-2a7704f59f3b)


## Contract Accounts / Smart Contracts

A contract account, also known as a smart contract, is a piece of code that lives on and is 'owned' by the blockchain itself. More precisely, externally owned accounts (EOAs) can send a transaction where the 'to' field is left empty (defaulting to 0x0, the null address), and where the data field contains the contract bytecode.

Here is an [example](https://sepolia.etherscan.io/address/0xB9bDB1084Bcb8B7D12082c8Ba9b410BF62cF563B#code) using my 'One Hundred Pixel Board' example project.

On the contract tab, you can see:

- The Solidity source code for the contract
- The contract ABI
- The contract's bytecode

When you compile a Solidity file, it will generate both bytecode (instructions for the Ethereum Virtual Machine - EVM) and an ABI (Application Binary Interface). The bytecode is what is actually run on the EVM, whereas the ABI is a helper interface between users and the EVM. The ABI defines functions and methods in a human-readable format, enabling users to call functions and receive data back.

Once a contract is uploaded to the blockchain, it cannot be modified.

Interacting with a Smart Contract costs gas, with some operations costing more gas than others - see [Opcodes for the EVM](https://ethereum.org/en/developers/docs/evm/opcodes/).

### Gas

A quick note on gas. Gas is another sort of currency - one that cannot be traded, bought, or sold. Gas is essentially a unit of measurement, which when multiplied by a cost in ETH, will give you the cost of a given action/transaction. For example, sending ETH from one EOA to another EOA costs 21'000 gas. Today gas is 0.000000014 ETH. So if I wanted to send 1 ETH to someone, the total transaction cost would be:

cost = value + gas * gas_price = 1 + 21'000 * 0.000000014 = 1.000294 ETH.

To check the current gas price, I like this [site](https://etherscan.io/gastracker).

High level, gas works using the notion of supply and demand - when the Ethereum network is busy, gas prices are high, when the network is not busy, gas prices are low.



## Wallets (Cold vs Hot)

You may have frequently heard the terms Cold and Hot wallet, and may think that the crypto is somehow 'stored' on these devices, that's not the case.

### Hot wallets:
Hot wallets are devices that hold your private keys **and** are connected to the internet.

These are typically extensions/plugins which can be downloaded and added to your browser of choice.

Examples of popular hot wallets include:
- Metamask
- Trust Wallet
- MyEtherWallet (MEW)

These work by injecting an instance of the web3.js library into the webpages context. This library then enables you to sign transactions using your private key.

### Cold Wallets

Cold wallets are offline devices that do **not** connect to the internet.

Examples of popular cold wallets include:
- Ledger
- Trezor

They work by storing your private key offline. When you want to send a transaction, you connect to the wallet (for example, through bluetooth or usb) and send your transaction 'request' to the cold wallet. The cold wallet then cryptographically signs the transaction request and sends you back the signed transaction request which you can then publish to the blockchain.

This makes cold wallets safer than hot wallets, as your private key is never directly exposed to the internet, nor is it saved inside your device's memory.



