# Keys

## Identity and Anonymity

Identity in Ethereum is guaranteed by a private key/public key cryptographic system, where the private key is known only to the user and is used to sign transactions, while the corresponding public key, which generates the Ethereum address, is used by others to verify the authenticity of the signed transactions.

Ethereum at its core is a completely anonymous system whereby entities are identified based on their public address.

This public address is 'owned' by whoever holds the private key.

The private key must be kept secret and 'belongs' to whoever generated it.

Here is a simple diagram showing how to get a public address from a private key:

Private key (generated randomly) -> Public key (computed from private key) -> Public address (computed from public key)


Key lengths:

Private Key: 256 bits long ~ 10**77, meaning for 115'792'089'237'316'195'423'570'985'008'687'907'853'269'984'665'640'564'039'457'584'007'913'129'639'936 possible combinations.

Public Key: 512 bits long ~ 10**156, meaning for 13'407'807'929'942'597'099'574'024'998'205'846'127'479'365'820'592'393'377'723'561'443'721'764'030'073'546'976'801'874'298'166'903'427'690'031'858'186'486'050'853'753'882'811'946'569'946'433'649'006'084'096 possible combinations.

Public Address: 160 bits long ~ 10**48, meaning for 1'461'501'637'330'902'918'203'684'832'716'283'019'655'932'542'976 possible combinations.


For comparison, there are around 10**80 atoms in the universe.

Meaning that the probability that 2 users generate the same private key is extremely low (if generation is done correctly).



Below you will find an 'Ethereum account generator', ie a sort of calculator which given a private key will give you the corresponding public key and public address.


**NEVER TRUST THESE KIND OF TOOLS FOR GENERATING REAL ACCOUNTS, USE THEM ONLY FOR TESTING PURPOSES**



You can also use the seed function which will call sha256 and generate a 256 bit hash, which can then be used as a private key.


**AGAIN, THIS IS NOT SAFE AT ALL AND IS NOT THE RECOMMENDED WAY TO GENERATE PRIVATE KEYS**

