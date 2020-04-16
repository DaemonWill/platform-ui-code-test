# provider-list-exercise
Simple app allowing the user to manage data between two lists on a ui with data persisted between sessions.

[![Build Status](https://travis-ci.com/DaemonWill/provider-list-exercise.svg?branch=master)](https://travis-ci.com/DaemonWill/provider-list-exercise)

Travis builds: https://travis-ci.com/DaemonWill/platform-ui-code-test

## Objectives
* Unselected providers can be clicked and sent to a selected list.
* Selected providers can be removed by clicking an X on the provider's card.
* When providers are removed from the selected list, they should go back to the unselected list.
* The state of both lists should be retained when the app is reloaded.
* Unit tests should be added to cover new functionality.

## Requirements

* npm version ^5.2 (in order to run npx)

## Setup

You can load the project dependencies by running an `npm install` in the root folder

## Using the App

After running `npm install` in the ui directory, you can:
* run tests using : `npm test`
* start the server at port **4200** with `npm start`
