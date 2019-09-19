# TechJobFinder

---

## Objective:

- Connect people in the tech industry with potential employers, and give them a way to save a listing to view again at a later date.

---

## Project Overview: Express Server Routing, API Calls, MySQL Database Get And Posts, Relational Object Mapping, And Dynamic HTML Manipulation

This full-stack web app takes user input from one of the two search input fields (job location or a descriptive keyword such as primary coding language) and formats it into an AJAX call to the GitHubJobs API. Listings that meet the search criterion are dynamically appended into table rows, along with a button that takes the user to a page with more information about that listing. From there, the user can either return to the search or add the listing to their saved listings, which sends the ID of the listing to the MySQL database. Listings on the saved listings page are populated based on the existance of these IDs in the database.

## Instructions for Operation

Clone the repository and install the necessary dependencies. You will also have to have a local MySQL server running on your machine. Ensure that the contents of config/config.js match your local connection parameters. Then, create a database locally inside MySQL using:

- CREATE DATABASE techjobfinder;

Then, you are ready to insert the table. This will be done automatically with all the necessary structure by simply starting the server. While in the root project directory, type this in your terminal window:

- node server.js

The website will now be deployed at http://localhost:8080

This project will also be deployed on Heroku, a link to which can be found in the links subheading of this readme.

## Project Organization

This project contains a file structure meant to meaningfully divide the MVC components into unique directories.

### Config Directory

The config directory contains the code to initialize the connection to the MySQL database.

### Models Directory

The models directory contains our object relational mapping. It uses our connection established in the config directory to connect to our database and gives us some structural definitions for our saved entries.

### Public Directory

This directory contains the base HTML, CSS, necessary images, and the front-facing javascript (such as user click events listeners) necessary to interact with the API.

### Routes Directory

The routes directory contains code defining our get and post routes to the API, as well as html routes to display our base HTML structures contained in the public directory.

### Server File

The server file residing outside all other directories contains the information required to initialize our server, as well as lets our app know to use our defined API and HTML routes.

## Technologies Implemented

This project uses:
* CSS
* Javascript
    * jQuery
* MySQL
* Node.js
    * npm dependencies
        * express
        * mysql

## Links

Github Repository: https://github.com/bryce-senninger/TechJobFinder

Heroku Deployed App: 