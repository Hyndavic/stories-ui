# The Crawford Technologies Programming Challenge

UI Technical Test Overview
● Created an Angular Application which consumes the spring boot application REST APIs to build UI.
● The application should Sarisifies the following requirements
1) Web site for stories
2) Ability to submit and display stories
3) Ability to download a graphic (*.png) with stories embedded
4) log views and downloads
5) Display a simple filtered chart of views and downloads over time

## Note:
Backend - Spring Boot Application has to run as another application to get data to this application and follow the instructions in the following git link to up and run local backend project

Run UI Project:
after cloneing the project do the follwoing steps
* npm install
* ng serve
  we can see our application with by default server port http://localhost:4200/

## Tech Stack
| Technology | Purpose |
| ------ | ------ |
| Java | Programming Language |
| SpringBoot  | Application Framework |
| Embedded Tomcat Server | To Deploy Application |
| Maven |  Build Tool |
| Swagger  | API Dcoumentaion and Testing |
| Junit, Mockito | Unit Test Cases |
| Log4j | To maintain Logs |
| Type Script  | Client Side Language |
| Angular  | Application Framework |

```sh
List of Stories Which user created
```

```sh
Screen to Add New Story
```

```sh
Complete Story View which having Download and View Chart
```

```sh
Downloaded PNG file view
```

```sh
Chart View for Views and Downloads
```

# StoryBlogClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
