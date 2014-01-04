# Bigdig

A kickstarter for public infrastructure where citizens can post projects they want to help realize in their community.

## Running the application locally

For local development the application runs as two separate components. The front-end code runs from a [Node.js](http://nodejs.org/) server connecting to a [Django](https://www.djangoproject.com/) backend acting as an API.

 * `brew install npm` - If you've never used Node.js and you have homebrew installed on OSX.
 * `npm install -g bower grunt` - Installs global dependencies for angular app.
 * `cd angular-client && npm install && bower install` - Installs project dependencies.
 * `grunt serve` - Run from `./angular-client`. Starts local webserver for frontend.
