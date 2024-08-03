const { generateKeys } = require("./helpers/keys");

async function readFileContent(basePath, fileName) {
  const filePath = `${basePath}/${fileName}.html`;
  const response = await fetch(filePath);
  if (response.ok) {
    return await response.text();
  } else {
    throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
  }
}

const helpersPath = "./helpers_html";
const basePath = "./processed_markdown";

async function getAndSet(id, path, content_name) {
  let content = await readFileContent(path, content_name);
  let element = document.getElementById(id);
  element.innerHTML = content;
}

async function getIntro() {
  getAndSet("intro", basePath, "0_Intro");
}

async function getEthereum() {
  getAndSet("part-1", basePath, "1_Ethereum");
}

async function getKeys() {
  getAndSet("part-2", basePath, "2_0_Keys");
  getAndSet("part-2-demo", helpersPath, "keys");
  getAndSet("part-2-continued", basePath, "2_1_Keys");
}

async function getAccounts() {
  getAndSet("part-accounts", basePath, "3_Accounts");
}

async function getProjects() {
  getAndSet("part-projects", basePath, "Projects");
}

async function getResources() {
  getAndSet("part-resources", basePath, "Resources");
}

function generateKeysHelper(privateKeyEditedLast) {
  let privateKeyEl = document.getElementById("private_key_input");
  let seedEl = document.getElementById("seed_input");
  let privateKey = privateKeyEl.value;
  let seed = seedEl.value;

  if (privateKeyEditedLast) {
    seed = undefined;
    seedEl.value = "";
    if (
      !(parseInt(privateKey, 16) > 0 && parseInt(privateKey, 16) < 16 ** 64) ||
      !RegExp(`^[abcdef0123456789]+$`).test(privateKey)
    ) {
      privateKeyEl.value = "";
      return;
    }
  } else {
    privateKey = undefined;
    privateKeyEl.value = "";
  }

  let result = generateKeys(seed, privateKey);

  document.getElementById("result_private_key").innerHTML = result.private_key;
  document.getElementById("result_public_key").innerHTML = result.public_key;
  document.getElementById("result_public_address").innerHTML =
    result.public_address;
  document.getElementById(
    "result_public_key_href"
  ).href = `https://etherscan.io/address/${result.public_address}`;
}

module.exports = {
  getIntro,
  getEthereum,
  getKeys,
  getAccounts,
  getProjects,
  getResources,
  generateKeysHelper,
};
