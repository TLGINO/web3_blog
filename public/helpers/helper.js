// preprocessMarkdown.js

const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const imsize = require("markdown-it-imsize");

const markdownFilesDir = path.join(__dirname, "../markdown_files");
const outputDir = path.join(__dirname, "../processed_markdown");

console.log("Preprocessing Markdown...");

// Read and process Markdown files
fs.readdirSync(markdownFilesDir).forEach((file) => {
  const filePath = path.join(markdownFilesDir, file);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const processedContent = processMarkdown(fileContent);
  const outputFile = path.join(outputDir, `${path.basename(file, ".md")}.html`);
  fs.writeFileSync(outputFile, processedContent);
});

console.log("Markdown preprocessing completed.");

function processMarkdown(content) {
  // parse markdown file
  const md = markdownIt().use(imsize);
  const result = md.render(content);

  return result;
}
