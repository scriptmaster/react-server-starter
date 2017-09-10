# Server and Browser Rendering Starter template for React projects

That's right.  Start off with a proper starter template to have both server and browser rendering features from your application react components.


### All applications in src/app

All components shared/renderd in browser and server are in src/app

Take a look into src/browser.js and src/server.js for the differences and initial props you can provide to <App /> component.


## Starting development server

After cloning this repo, install package dependencies with `npm i`

Install global packages: `npm i -g babel-cli webpack webpack-dev-server`

Start the development server with

`npm run dev`

This starts the server with --hot code replacement using webpack-dev-server

Code, Save and the browser renders your components immediately.

## Running server in production

Ensure package dependencies and global packages are installed.

Then, simply:

`npm start`


## No external scripts

No complicated hard to understand scripts.


## Why no TypeScript?

I was trying to setup a simple development server for react with both server and client side rendering and typescript threw a lot of roadblocking errors in compilation, even though I used the right .ts, .tsx extensions and ts-loader version.  This is the quickest I could create.


# Disclaimer

Starter template created from scratch and written by Mohammed Sheriff.  All the lines of this readme and the starter template code are written by Sheriff with understandings from how React, ES6, Babel, Webpack and NodeJS can work together, except package.json and auto-generated files.  No copy paste as most of you would expect/underestimate.  You are free to use it, if you like it.
