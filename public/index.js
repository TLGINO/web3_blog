let file_0;
let file_1;
let file_2;
let file_projects;
let keys_html;

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

const basePath = "./processed_markdown";
const helpersPath = "./helpers_html";

async function loadMarkdownFiles() {
  try {
    file_0 = await readFileContent(basePath, "0_Intro");
    file_1 = await readFileContent(basePath, "1_Ethereum");
    file_2 = await readFileContent(basePath, "2_Keys");
    file_2_1 = await readFileContent(basePath, "2_1_Keys");
    file_projects = await readFileContent(basePath, "Project");
    keys_html = await readFileContent(helpersPath, "keys");

    getIntro();
  } catch (error) {
    console.error(error);
  }
}

function getAndSet(id, content) {
  let element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    element.innerHTML = content;
  } else {
    element.classList.add("hidden");
  }
}

function getIntro() {
  getAndSet("intro", file_0);
}

function getEthereum() {
  getAndSet("part-1", file_1);
}

function getKeys() {
  getAndSet("part-2", file_2);
  getAndSet("part-2-demo", keys_html);
  getAndSet("part-2-continued", file_2_1);
}

function getProjects() {
  getAndSet("part-projects", file_projects);
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
      !(parseInt(privateKey, 16) > 0 && parseInt(privateKey, 16) < 16 ** 32) ||
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
  loadMarkdownFiles,
  getIntro,
  getEthereum,
  getKeys,
  getProjects,
  generateKeysHelper,
};
