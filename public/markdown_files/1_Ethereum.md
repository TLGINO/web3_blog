# What is Ethereum?

At its core, Ethereum and blockchain technology in general introduces a new paradigm for computing and storage. It is a decentralized and trustless system, maintained by a network of volunteers worldwide, who collectively contribute to the security of the entire network. To understand the use cases of Ethereum, we need to examine and question some of society's most fundamental principles.

## Trust:

In a typical centralized system, participants must trust each other to operate effectively.

For example, when you buy an item from Amazon, how can you be sure Amazon will take your money and deliver the product? The quick answer is — you can't. You purchase from Amazon because you **TRUST** Amazon.

Similarly, if a website appears suspicious and asks for your credit card information, you might be unwilling to provide it because you **don't TRUST** them. What differentiates this sketchy website from Amazon? Reputation.

For instance, you probably wouldn't input your credit card information into 'amazingdealsforalltotallynotascam.xyz'.

Reputation is intangible and lacks intrinsic permanence or value. Therefore, entities should avoid relying on it as a form of trust.

In the 'real world,' reputation is just one tool entities use to trust one another. Often, they resort to legal backing, relying on government support to safeguard transactions. But what if the government is corrupt or not acting fairly?

Ethereum and blockchain technology propose a different paradigm, one where entities do not need to trust each other, known as **trustless**.

## Immutability:

Another issue with centralized systems is the lack of 'real' ownership. Without delving into the philosophical debate of what it means to own something, systems can grant ownership of various goods (such as land, money, titles, etc.), but this ownership relies on:
- The system maintaining a set of principles.
  - For example, the US dollar was once pegged to the amount of gold held in reserves, known as the [gold standard](https://en.wikipedia.org/wiki/Gold_standard), meaning printing an infinite amount of money was not possible since there is a finite amount of gold on Earth.
- The system not collapsing or disappearing.
  - Another example is the [repudiation of debt during the Russian Revolution](https://en.wikipedia.org/wiki/Repudiation_of_debt_at_the_Russian_Revolution), where debts and bonds were canceled.

Blockchain, by nature, is immutable and verifiable by all.

However, this does not mean blockchain is the ideal candidate for all computing and data-related needs. It should not be seen on par with databases or typical desktops but as an immutable ledger, capable of keeping a log of state changes.

"Can you please tell me why using the Ethereum blockchain is better than using Excel?" - Vitalik Buterin on what he asks startups based on top of Ethereum.

## Blockchain and Security:

"A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. Since each block contains information about the previous block, they effectively form a chain, with each additional block linking to the ones before it." - [Wikipedia](https://en.wikipedia.org/wiki/Blockchain)

This linkage ensures that blockchains are highly tamper-resistant. Any alteration to a previously finalized block changes its hash, which consequently invalidates all subsequent blocks due to the change in the parent hash.

A great tool for understanding and visualizing this was developed by Anders Brownworth and is available at this [link](https://andersbrownworth.com/blockchain).

Without delving into the differences between Bitcoin (Proof of Work) and Ethereum (Proof of Stake) at this stage, it's important to note that although these blockchains are extremely secure, they are not invulnerable to attack.

Bitcoin is vulnerable to a 51% attack, whereby 51% of nodes 'overpower' the other 49% and can alter the past and future state of the blockchain.

Ethereum is vulnerable to:
- **33% attack**: Impact chain performance.
- **51% attack**: Control future blocks.
- **66% attack**: Rewrite history.


## Ethereum and EVM, some technical notes:

Ethereum is often referred to as a "world computer" due to its unique architecture. A global network of validators collaboratively maintains the Ethereum blockchain, running the Ethereum Virtual Machine (EVM).

The EVM works similarly to your operating system, except that it is quite restricted in what it can do (from a computational point of view) - also it is not meant to be an OS :)

That said, the EVM is said to be (quasi) [Turing Complete](https://en.wikipedia.org/wiki/Turing_machine) - meaning it is capable of executing any computer algorithm. It is 'quasi' Turing Complete because a Turing Machine can also loop infinitely, this is not feasible in Ethereum as execution steps are restricted by the use of gas - more on this later.

The EVM is also single-threaded, meaning it is not capable of executing more than one program or transaction at once. This ensures that if a program isn't run to termination or an error is encountered, the whole set of instructions can be rolled back, returning the blockchain to it's state pre-execution.




## ETH vs Ethereum:

A common misconception is that ETH = Ethereum.

In fact, Ethereum refers to the blockchain itself, whereas ETH or ether refers to the crypto currency.

## ETH:

ETH is fungible, meaning all ETH's are created equal and there is no 'ID' or serial number associated with any 1 specific ETH.

ETH is similar to the dollar or euro in the sense that it can be further divided.



| Unit Name       | Value in Wei | Number of Wei             |
|-----------------|--------------|---------------------------|
| Wei (wei)       | 1 wei        | 1                         |
| Kwei (babbage)  | 10^3 wei     | 1'000                     |
| MWei (lovelace) | 10^6 wei     | 1'000'000                 |
| Gwei (shannon)  | 10^9 wei     | 1'000'000'000             |
| Twei (szabo)    | 10^12 wei    | 1'000'000'000'000         |
| Pwei (finney)   | 10^15 wei    | 1'000'000'000'000'000     |
| Ether (buterin) | 10^18 wei    | 1'000'000'000'000'000'000 |


Here is a nice [unit converter](https://eth-converter.com/).

You cannot further divide 1 Wei.