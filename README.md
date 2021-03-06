# ToeDoe

A simple todo application in Angular (2.x), implementing the Flux/Redux state management pattern using @ngrx/store. This application can be used as a project boilerplate as well. It contains all we usually need to develop a single page app at Aan Zee.

# Development

### Quick start

First, clone (or download) the repo. Then, install dependencies and start the server.

```bash
# Install the dependencies with npm
$ npm install

# Or do a clean install
$ npm run clean-install

# Start the server
$ npm start

# Or start the server using HMR
$ npm run start:hmr
```

Go to [http://0.0.0.0:8080](http://0.0.0.0:8080) in your browser.

### Testing
```bash
# Single run
$ npm run test

# Live mode (TDD style)
$ npm run test-watch
```

# Production

### Building
```bash
$ npm run build
```

You can now go to `/dist` and deploy that to your server.

# License

[MIT](/LICENSE)
