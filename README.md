# CaptainDomoUI
This is the end-user GUI to apply for subscription / unsubscription to a Majordomo mailing list. The application and subscription processes are handled completely by the [CaptainDomoService](https://github.com/CaptainDomo/CaptainDomoService) REST service.

# Attention
This branch is used for a complete re-write of this UI based on [Angular](https://angular.io/) and is work in progress.

If you are looking for a tested and working version, please refer to the [master](https://github.com/CaptainDomo/CaptainDomoUI/tree/master) branch.

# Techstack
This GUI is implemented in Angular 5 with Bootstrap CSS. 

# Run
## Dependencies
* Before you can use this UI you need a running [CaptainDomoService](https://github.com/CaptainDomo/CaptainDomoService) REST API available. (See the Quickstart section below for local development environment / sandbox setup).
* The `backend_base_url` in the `config.json` file needs to point to the CaptainDomoService REST API base; for example `http://localhost/src/public`.
* Now you can just open then `index.html` in your browser to run this AngularJs application.

## CaptainDomoService Quickstart
To make the live of the frontend developers easier and for quick testing / demoing the CaptainDomoService is available as an easy to setup pre-built docker image. Just follow these short steps; (`./local_backend`is the startpoint in your local CaptainDomoService run environment)
* Get an (SMTP) email account on a mailserver which is usable via TLS and username & password
* Copy the `Config.php_example` within `./local_backend/captainDomoServiceConfig/`to `Config.php` and adapt the file contents as you like
* [Get docker](https://www.docker.com/) and install it on your machine if not already available
* Change into `./local_backend` and make sure the `docker-compose.yaml` is available
* Within `./local_backend` bring the backend service up via `docker-compose up --force-recreate` (this will download the latest docker image build from Docker Hub)

Notes:
* The REST API is exposed at port 80 and starts below `src/pulic`. A complete example is: [http://localhost/src/public/management/member](http://localhost/src/public/management/member)
* The MySQL-Database is directly connectable at port 3386
* For your convenience we also included phpMyAdmin at [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/). Username: `root` and empty password

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).