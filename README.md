# Dating-App
This project is built with Angular 10 served by ASP.NET Core(5.0) Web API in the backend, connected with a Sql Server database.

## Description
My Dating App is a social media kind of app that allows people to register, login with an account and interact with other people. provided with features common to social media apps like,
chatting, follow and more.

## Prerequisites
You should have 
[NodeJS](https://nodejs.org/en/),
[npm](https://www.npmjs.com/package/download),
[Angular10 CLI](https://angular.io/cli#installing-angular-cli),
[ASP.NET](https://dotnet.microsoft.com/download) Core 5.0 SDK and
[Sql Server Database Management Studio ](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
installed in your PC to run the application

## Installation
1- Clone the github repo ``` git clone https://github.com/odiaa97/Dating-app ```

2- In your terminal go to the project directory ``` cd "Dating App" ```

3- Go to backend project ``` cd API ```

4- Run the following commands to configure your database:

``` dotnet ef migrations add InitailMigration ``` to create your first migration

``` dotnet ef database update ``` to create your databse and schema

``` Dotnet run ``` to run the backend server

5- go to the Client folder 

```
cd ..
cd client
cd src
cd app
```

6- Run the angular app ``` ng serve -- open ```
