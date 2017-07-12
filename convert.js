const { vscode2atom, vscode2sublime } = require('node-atomizr');
const path = require('path');
const fs = require('fs');

function stringifyBody(snippets) {
  snippets = JSON.parse(snippets);
  for (let snippet of Object.values(snippets)) {
    snippet.body = snippet.body.join('\n');
  }
  return JSON.stringify(snippets);
}

const vscodePath = path.join(__dirname, 'vscode/snippets.json');
const atomPath = path.join(__dirname, 'atom/snippets.cson');
const sublimePath = path.join(__dirname, 'sublime/nek-ui.sublime-completions');

let vscodeSnippets = fs.readFileSync(vscodePath, 'utf8');
vscodeSnippets = stringifyBody(vscodeSnippets);

const atomSnippets = vscode2atom(vscodeSnippets, {scope: '.text.html.basic' });
fs.writeFileSync(atomPath, atomSnippets, 'utf8');

const sublimeSnippets = vscode2sublime(vscodeSnippets, { scope: 'text.html(.basic)' });
fs.writeFileSync(sublimePath, sublimeSnippets, 'utf8');

console.log('Done!');
