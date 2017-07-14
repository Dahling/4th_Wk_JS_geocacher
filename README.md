# PuzzlePieces

#### App

#### By **Jenna Cooper**

## Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Specs
| Behavior | Example Input | Example Output |
| :-------------     | :------------- | :------------- |
| **User may visit a page to see a list of all club members** | ... | ... |
| **User may click a club member's entry, in the list, to visit his or her profile page, to see additional profile details** | ... | ... |
| **User may visit an "About" page that explains what the club is, and what the club does** | ... | ... |
| **Administrators may add new users to the club** | ... | ... |
| **Administrators may edit and update user profiles** | ... | ... |
| **Administrators may delete users who leave the club** | ... | ... |


## Setup/Installation Requirements
1. Clone this repository.
2. In the terminal, navigate into the repository and run the following commands:
  $ npm install
  $ bower install
3. Create a new file called api-keys.ts in the src/app directory
4. Create a firebase account at https://firebase.google.com/ . On their site choose 'Add Firebase to your web app'.
5. Place the code they give you inside the 'api-keys.ts' file, using this code...
    export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
    };
6. Run $npm install angularfire2@4.0.0-rc.0 firebase --save
7. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
* None

## Technologies Used
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

* Angular2
* Node - npm
* Gulp
* Bower

## Support and contact details

_In emergency, dial 9-1-1_

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Jenna Cooper}_**


### Extra Info. that may be needed when extending upon this project...

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
