# Bigdig

A kickstarter for public infrastructure where citizens can post projects they want to help realize in their community.

## Running the application locally

For local development the application runs as two separate components. The front-end code runs from a [Node.js](http://nodejs.org/) server connecting to a [Django](https://www.djangoproject.com/) backend acting as an API.

### Install Angular Frontend Stuff

 * `brew install npm` - If you've never used Node.js and you have homebrew installed on OSX.
 * `npm install -g bower grunt` - Installs global dependencies for angular app.
 * `cd angular-client; npm install && bower install; cd -` - Installs project dependencies.

### Install Python Backend Stuff

 * `sudo easy_install pip` - Installs pip, the python pkg manager.
 * `sudo pip install setuptools --no-use-wheel --upgrade` - Updates setuptools so they work with pip.
 * `sudo pip install -r ./server/requirements.txt` - Installs server dependencies.
 * `cd server && ./manage.py syncdb` -- Create Database.

### Run local servers

 * `./app.sh` - Run both Django server backend and angular JS frontend.
   * Note: If the python backend crashes, you won't see the output.
