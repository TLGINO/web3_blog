const { assert } = require("console");
const { createHash } = require("crypto");
const { ec } = require("elliptic");
const keccak256 = require("keccak256");

const EC = new ec("secp256k1");

function privateKeyToPublicKey(privateKey) {
  // Use elliptic curve cryptography to compute public key from private key
  const key = EC.keyFromPrivate(privateKey);
  const publicKey = key.getPublic().encode("hex").slice(2); // Remove the prefix '0x'
  return publicKey;
}

function publicKeyToAddress(publicKey) {
  // Use keccak256 to compute public address from public key
  const address = keccak256(Buffer.from(publicKey, "hex"))
    .toString("hex")
    .slice(24); // Take the last 40 characters
  return `0x${address}`;
}

function generateKeys(seed, privateKey) {
  // ----
  // THIS IS NOT VERY SAFE / DOES NOT FOLLOW BEST PRACTICES
  // ----

  if (privateKey === undefined && seed === undefined) {
    // if no seed / private key specified, create a random private key
    let rndNum = `${Math.random()}`;
    privateKey = createHash("sha256").update(rndNum).digest("hex");
  } else if (seed) {
    // hash the seed and use it as a private key
    privateKey = createHash("sha256").update(seed).digest("hex");
  }

  const publicKey = privateKeyToPublicKey(privateKey);
  const publicAddr = publicKeyToAddress(publicKey);

  return {
    private_key: `0x${privateKey.padStart(32, 0)}`,
    public_key: publicKey,
    public_address: publicAddr,
  };
}

module.exports = {
  generateKeys,
};
