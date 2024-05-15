const file_0 = require("./processed_markdown/0_Intro.js");
const file_1 = require("./processed_markdown/1_Keys.js");

function getIntro() {
  document.getElementById("intro").innerHTML = file_0;
}

function getKeys() {
  let content = document.getElementById("part-1");

  // Toggle the visibility of the content
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    content.innerHTML = file_1;
  } else {
    content.classList.add("hidden");
  }
}
module.exports = {
  getIntro,
  getKeys,
};
