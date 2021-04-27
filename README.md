# CampspotChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Environment Set Up

You'll first need to check your environment to make sure you have the proper tools and tools installed. If you recieve a version number when running any of the below commands, continue on to the next check. If you recieve an error along the lines of 'ng is not recognized' then please use the links or cli commands to install the missing item. It's always good to run the version check command after downloading or installing anything to confirm it worked.

Open your terminal of choice and run the following commands:

1. `git --version` will check that you have git version control installed
      - download here if you get an error response https://git-scm.com/downloads
2. `npm -v` will check for a Node.js install, including npm package manager
      - download here https://nodejs.org/en/
3. `ng v` will check for the Angular CLI
      - install with this cli command `npm install -g @angular/cli`
      
Once you get a version return for each of those, you should have everything you need to run the program.

## Run the Program

Open your preferred IDE, I use Visual Studio Code, which can be downloaded here https://code.visualstudio.com/download, but any modern IDE (i.e. atom, vim, etc) should work fine if you already have it installed. Clone this repo in the terminal of your IDE using the following git command.
      - `git clone https://github.com/christy-inman/Campspot-Challenge.git`
Your IDE may run an install automatically, but if not once the project is cloned and open run `npm i` to ensure all dependencies are installed and ready for the build.
To see the project in your browser you can serve the code locally by running `ng serve`. Then navigate to `http://localhost:4200/` in your chosen browser, when it has successfully compiled the code you should see a 'Campspot "Gap Rule" Challenge' title, and a button that says 'Search Reservations' with a breif description.

When you click the button it will run the code to search with the provided dates and reservations to check which ones are available without creating a one day gap, and then replace the button description with the names of available campsites.


If you would like to build without serving, you can run `ng build` instead, and the build artifacts will be placed in the `dist/` directory.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
