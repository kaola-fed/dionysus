const Atomizr = require('node-atomizr');
const path = require('path');
const fs = require('fs');

function stringifyBody(snippets) {
  snippets = JSON.parse(snippets);
  for (let snippet of Object.values(snippets)) {
    snippet.body = snippet.body.join('\n');
  }
  return JSON.stringify(snippets);
}

function convertFormat(filePath) {
  const type = path.basename(filePath).split('.')[0];

  let sourceSnippets = fs.readFileSync(filePath, 'utf8');
  sourceSnippets = stringifyBody(sourceSnippets);
  ['atom', 'sublime'].forEach(target => {
    const suffix = target === 'atom' ? 'cson' : 'sublime-completions';
    const targetSnippets = Atomizr['vscode2' + target](sourceSnippets, {
      scope: '.text.html.basic',
    });

    const targetPath = path.join(__dirname, target, `${type}.${suffix}`);
    fs.writeFileSync(targetPath, targetSnippets, 'utf8');
  })
}

function walk() {
  const sourceDir = path.join(__dirname, 'vscode');
  fs.readdirSync(sourceDir).forEach(file => {
    const filePath = path.join(sourceDir, file);
    convertFormat(filePath);
  })
}

walk();
console.log('Done!');
