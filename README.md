# poc-fe-shell
Angular application with a shell

# Notifylib

A simple library to exchange notifications.

## Instructions

* Install dependencies: `npm install`
* Create npm package: `npm pack`
* Switch to consumer project and install dependency: `npm install ../notifylib/notifylib-1.0.0.tgz`

# Shellcomponents

A collection of resuable components

## Instructions

* Install dependencies: `npm install`
* Create distributable elements: `npm run build`

# App

An application using the _shell components_ and the _notifylib_ library.

* Install dependencies: `npm install`
* Copy shell elements: `npm run sync-shell`
* Update `app/src/index.html` to use current version of shell components.
* Run development server: `npm run start`
