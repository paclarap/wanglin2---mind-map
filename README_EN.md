# Simple Mind Map

This repository contains a JavaScript mind map library and a web application built with it.

## Features
- Plugin based architecture to keep the core lightweight.
- Supports multiple structures such as logic diagrams, organizational charts and fishbone diagrams.
- Highly customizable themes and styles.
- Node content can be text (plain or rich), images, icons, links, notes, tags, summaries and formulas.
- Dragging, free layout and different node shapes.
- Canvas zooming and panning.
- Export to `json`, `png`, `svg`, `pdf`, `markdown`, `xmind` and `txt` and import from `json`, `xmind` and `markdown`.
- Shortcuts, undo/redo, associative lines, search and replace, mini map, watermarks, scrollbars and more.

## Installation
```bash
npm i simple-mind-map
```

## Usage
Create a container element with a non zero width and height and then instantiate:
```html
<div id="mindMapContainer"></div>
```
```js
import MindMap from 'simple-mind-map'

const mindMap = new MindMap({
  el: document.getElementById('mindMapContainer'),
  data: {
    data: { text: 'Root' },
    children: []
  }
})
```
For more features see the [documentation](https://wanglin2.github.io/mind-map-docs/).

## Updating translations
When adding new UI strings please update `web/src/lang/en_us.js` with an English translation and keep the key structure in sync with `zh_cn.js` and `zh_tw.js`.

## Running tests
Tests are located in `simple-mind-map/test`. Run them with:
```bash
npm run test --prefix simple-mind-map
```
