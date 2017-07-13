# dionysus
[![][npm-image]][npm-url]

Snippets of [nek-ui](https://github.com/kaola-fed/nek-ui) && kmui which support for VSCode & Atom & Sumlime Text

> 如果是 IDEA，见[这里](https://github.com/kaola-fed/dionysus/issues/1)

以下以 nek-ui 为例说明，kmui 类似

## VSCode

File > Preferences (Code > Preferences on Mac) > Snippets，选择 HTML，把 [nek-ui.json](vscode/nek-ui.json) 内容拷贝进去

![vscode](https://user-images.githubusercontent.com/2230882/28130899-dd4bf170-676a-11e7-9ecf-40286d610f97.gif)

## Atom

File > Snippets，把 [nek-ui.cson](atom/nek-ui.cson) 内容拷贝进去

![atom](https://user-images.githubusercontent.com/2230882/28130898-dd400edc-676a-11e7-9535-1a8242200741.gif)

## Sublime Text

Preferences > Browse Packages > User，下载 [nek-ui.sublime-completions](sublime/nek-ui.sublime-completions)，放到 Sublime 用户目录下

> Sublime Text 默认使用 `crtl+space` 作为呼出预览列表命令 `auto_complete` 的快捷键，如果冲突请重新设置其它快捷键

![sublime](https://user-images.githubusercontent.com/2230882/28130897-dd26a1c2-676a-11e7-9872-403171af958a.gif)

## Development

基于 VSCode Snippets 写的，然后转到 Atom 和 Sublime Text 的格式

如果有修改，**只需要需改** `vscode` 下的文件，然后 `npm run build` 即可

[npm-url]: https://npmjs.org/package/dionysus-snippets
[npm-image]: https://img.shields.io/npm/v/dionysus-snippets.svg