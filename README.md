# Budget Tracker (PWA)

## Description

Budget Tracker is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the "Add/Subtract Funds" buttons. They are able to add a transaction with or without a connection. When a user enters a transaction while offline, these transactions are stored in the indexedDB, and transferred to the database when the user comes back online.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Example Usage](#example-usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Working flow](#working-flow)

## Installation

To install the required dependencies, run `npm install`

This package assumes there is a MongoDB server running on localhost:27017. If your server is running somewhere else, you can edit `server.js` to reflect that.

## Usage

To start the server, run `npm start`. To access the app after starting the server, go to http://localhost:3021 in your browser.

## Example Usage

Deployed App: 
[](https://floating-garden-88736.herokuapp.com/)
The github readme is here,
 https://github.com/Dhanya-krishnan2/pwa-webapp/blob/master/README.md

https://github.com/Dhanya-krishnan2/pwa-webapp
An example screenshot of the application is below.

![screenshot](assets/screenshot.jpg)
![screenshot](2020-09-11 (2).png)
![screenshot](assets/screenshot.jpg)
![screenshot](assets/screenshot.jpg)
![screenshot](assets/screenshot.jpg)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you want to contribute, open a Pull Request and include a detailed description and screenshots of the changes.

## Questions

If you have any questions about the repo, open an issue or contact [dhanya-krishnan2](https://github.com/dhanya-krishnan) directly at dhanyakunhi@gmail.com.

## WORKING FLOW OF THIS PROGRAM
  This is the application which takes advantage of PWA, we are creating manifest.json and service-worker.js to keep the app running while offline and then caching all the file in the application by using service-worker.js. It is a promise based program. The manifest.jason is  providing basic metadata about name and version and it specify the aspects of backgroud scripts and browser functioality.
    service worker.js is the script and which the browser runs in the background, which push notification and background sunchronisation. This API lets us to use the applicaition when it is offline. To use service worker we need to have "https". The service worker is developed by using the its life-cycle which is here described as installation, activation, and fetching.
