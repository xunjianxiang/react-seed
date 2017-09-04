'use strict';

function getInfo (file) {
  let result = {};
  if (/\.js$/.test(file)) {
    result.tag = 'script';
    result.attr = 'src';
  } else if (/\.css$/.test(file)) {
    result.tag = 'link';
    result.attr = 'href';
  } else {
    throw new Error('lazyload only can receive script or style!')
  }
  return result;
}

function appendFile (file) {
  return new Promise(resolve => {
    let info = getInfo(file);
    if (!document.querySelector(`${info.tag}[${info.attr}="${file}"]`)) {
      let tag = document.createElement(info.tag);
      info.tag === 'link' && tag.setAttribute('rel', 'stylesheet');
      info.tag === 'script' && tag.setAttribute('type', 'text/javascript');
      tag.setAttribute(info.attr, file);
      let parent = info.tag === 'link' ? document.head : document.body;
      parent.appendChild(tag);
      tag.onload = () => {
        resolve(file);
      }
    } else {
      resolve(file);
    }
  })
}

export function lazyload (files=[]) {
  let dependencies = [];
  files.forEach(file => {
    dependencies.push(appendFile(file));
  })
  return Promise.all(dependencies)
}
