const file_0 = require("./processed_markdown/0_Intro.js");
const file_1 = require("./processed_markdown/1_Ethereum.js");
const file_2 = require("./processed_markdown/2_Keys.js");

function getAndSet(id, file) {
  let content = document.getElementById(id);
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    content.innerHTML = file;
  } else {
    content.classList.add("hidden");
  }
}

function getIntro() {
  document.getElementById("intro").innerHTML = file_0;
}

function getEthereum() {
  getAndSet("part-1", file_1);
}

function getKeys() {
  getAndSet("part-2", file_2);
}

module.exports = {
  getIntro,
  getEthereum,
  getKeys,
};
