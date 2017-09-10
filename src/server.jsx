import React from "react";
import { renderToString } from 'react-dom/server';
import App from "./app/index";

import fs from "fs";

import express from 'express';

const server = express();

const port = process.env.PORT || 7070;

server.use('/static', express.static('public/static'));

var indexFile = (fs.readFileSync('public/index.html') || '').toString();

server.get('/', (req, res) => {
  let props = { message: "Server rendered" };
  const appString = renderToString(<App {...props} />);
  res.send(indexFile.replace('<div id="root"></div>', `<div id="root">${appString}</div>` ));

});

// In production cache file and wait for any changes
fs.watchFile('./public/index.html', {persistent: true, interval: 60000}, () => {
  indexFile = new String(fs.readFileSync('public/index.html') || '');
});


server.listen(port);
console.log('\n\nReact Components rendered and serving from \n\nhttp://0.0.0.0:' + port);
