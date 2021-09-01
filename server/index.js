import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import App from '../src/App.tsx';

const PORT = process.env.PORT || 3006;
const app = express();
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
global.document = new JSDOM(app).window.document;

app.get('/', (req, res) => {
  const history = createMemoryHistory();
  const app = ReactDOMServer.renderToString(
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>,
  );

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
