# Projects:

Here I'll put a list of web3 projects I'm working on / am done with.

## [One Hundred Pixel Board](https://github.com/TLGINO/one_hundred_pixel_board):

A 10*10 board of pixels which you can buy and leave a message.
The pixel belongs to the highest bidder and can be changed by anyone.

![Board with pixel](https://raw.githubusercontent.com/TLGINO/one_hundred_pixel_board/master/image.png)



## [PoloCoin](https://github.com/TLGINO/PoloCoin):

I'm working on a ERC20 token and NFT project inspired by my dog POLO.

![Polo](https://raw.githubusercontent.com/TLGINO/PoloCoin/master/img/polo.png =200x200)

The NFTs will only be mintable by POLOCOIN holders - WIP.

## [Interacting with Ethereum L1 - Eth Stats](https://github.com/TLGINO/eth_stats):

I have started working on some python scripts to get data such as gas price, number of transactions and withdrawals each time a new block is published. This is of course done by pinging my own node and subscribing to events.

Repo is relatively new and still WIP!

## Running an Ethereum Node:

I have also setup my home lab to run an Ethereum node using [Nethermind](https://www.nethermind.io/) as execution client and [Teku](https://consensys.io/teku) as a consensus client.

I have also forwarded my rpc url [rpc.lettry.xyz](https://rpc.lettry.xyz) and setup both http and wss connections. In the process I also setup a reverse proxy running on a raspberry pi, in order to correctly route all the requests to the appropriate server and port.

I might setup a whitelist in the future to stop randoms / bots using my rpc endpoint - tbd.

Side note: I was surprised at how easy it was to setup and connect both the clients, super good docs (especially for Nethermind) and good developer experience.
I've set both clients to run as a service on my ubuntu machine, the only "issue" I encountered being a lack of ram, which I initially compensated by upping my SWAP from 2GB to 24GB, but in the end decided it would be best to upgrade my RAM from 16GB to 32GB.



## Running an L2:

I am also running Taiko as an L2, although I haven't interacted with it much - I have just synched it so far.




