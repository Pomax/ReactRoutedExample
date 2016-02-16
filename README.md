# ReactRoutedExample

This is a basic example React app with react-router 2.0 taking care of url history stuffs,
with webpack being able to do bundling as well as dev mode hot reload servering, and with
an express server that can hook into our application routing to serve up "static" HTML
for pages that react-router claims exist as URLs.

The trick here is that we're basically running two apps, one of which can be loaded
"into" the other.

1. The first is a standard React app with React-Router faking a browser history.
   This app needs an `index.html` file for it to load into.
2. The second is a React app that, for the `/` route, actually generates a full
   HTLM document, by having a React component that has a render() function that
   literally starts with `return <html>.....</html>;`.
   
The first app gets bundled as a `bundle.js` file, the second app is used by an
express server to generate page content for URL, but with one extra bit: in 
addition to being a full HTML document is also contains a script element

`<script src="bundle.js" />`

Which loads up our first React app. React is quite smart in that if it sees
HTML markup with React properties, rather than regenerating all the things
it simply builds the JS App backing and then hooks it into what the browser
already rendered.

## What goes where?

The following dirs are used:

- `./`, with the server.js and middleware.jsx files that constitute our server.
- `./react` houses all the reacty bits:
  - `./react/App.jsx` is our main app entry point for bundling purposes.
  - `./react/components` has all the react components we make use of
  - `./react/routes` has the routing information for react-router.
- `./public` is the static asset dir for our server.
  - `./public/css` quick and dirty styling assets
  - `./public/images` quick and dirty image assets
  - `./public/js` this is where we place the bundle.js we build off of `App.jsx`

## How does the building happen?

This example app uses webpack for its building, linting, watching, etc. Mostly
because it's pretty easy to make everything work. Have a look at the webpack
`webpack.config.js` file, which defines all the things it can do, in conjunction
with the `package.json` npm scripts:

- the npm `build` script runs webpack "for real", building the bundle while watching
  the file system for changes. If there are any, it immediately updates the bundle.
- The npm `dev` script runs webpack "for devs", with an auto-spawning server on
  http://localhost:8080 that loads up `./public/index.html` with websocket magic
  so that while you dev, it acts as a live server. Super handy.
- The npm `server` script runs the express server on http://localhost:8080 (so it
  should be obvious that you can't run this *and* dev mode at the same time),
  and simply taps straight into the react application to generate pages based
  on, unsurprisingly, client-requested URLs. It's a server. It's what it does.

For convenience, the `npm start` command runs the `build` and `server` scripts
in parallel. You'll need to reload a page in the browser any time you make
modifications, but all your URLs actually work. Unlike `npm run dev`, which
has live-reloading but has limits to its magic: if the URL bar isn't `/` and
you hit reload, it's going to 404 because the page you're looking for literally
does not exist.

