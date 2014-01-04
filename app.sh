#! /bin/bash
#
# Starts a python Django server on port 8000 and a node server on 9000.

echo 'Killing any currently running Django servers...'
pkill -f manage.py
echo 'Starting Django server...'
screen -d -m ./server/manage.py runserver 8000

echo 'Open a new tab with CMD+t and enter screen -r to view Django server...' 
cd ./angular-client
echo 'Starting Node server...'
grunt serve --port 9000
