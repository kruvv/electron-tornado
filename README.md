# electron-tornado
This is a simple electron app paired with a python tornado server.

The server generates 10 to 50 random ID's on /getData request. It also receives data from a third-party api in a request /api/posts. The received data is displayed in the application window.

## Prerequisites
To run this app you'll need `Node.js` and `pip` installed on your machine.

## Packaging
To get the app nice and packaged, run one of the following commands depending on your platform:
- `npm run package-win`
- `npm run package-linux`

This will generate the packaged app in 'release-builds' folder and also install python dependencies.

## Development
To run the application in development mode, comment out line set production mode in the main.js file.
