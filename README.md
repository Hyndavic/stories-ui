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
Backend - Spring Boot Application has to run as another application to get data to this application and follow the instructions in the following git link to up and run local backend project.
https://github.com/Hyndavic/stories-backend

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
![ui-1](https://user-images.githubusercontent.com/131328078/233700405-d4ff8eae-058d-40e7-806d-dd3f8069734a.jpg)


```sh
Screen to Add New Story
```
![ui-5](https://user-images.githubusercontent.com/131328078/233700485-e8c8bcc3-d8cd-4412-bdd6-c901ce9311f4.jpg)

```sh
Complete Story View which having Download and View Chart
```
![ui-2](https://user-images.githubusercontent.com/131328078/233700579-df983fc9-f743-4828-9007-d714de502c4e.jpg)

```sh
Downloaded PNG file view
```
![ui-3](https://user-images.githubusercontent.com/131328078/233700670-8ccf3f48-9115-42a8-8b4a-bdb3f6bc0648.jpg)


```sh
Chart View for Views and Downloads
```
![ui-4](https://user-images.githubusercontent.com/131328078/233700692-51a57b79-9f93-4e69-b0ee-59c8913f974e.jpg)


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
