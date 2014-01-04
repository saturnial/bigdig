#!/bin/bash
echo 'Killing any currently running Django servers...'
pkill -f manage.py
echo 'Starting Django server...'
cd server
screen -d -m python manage.py runserver 8000
echo 'Open a new tab with CMD+t and enter screen -r to view Django server...' 
cd ../angular-client
echo 'Starting Node server...'
grunt serve
