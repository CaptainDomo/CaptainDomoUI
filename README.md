# CaptainDomoUI
This is the end-user GUI to apply for subscription / unsubscription to a Majordomo mailing list. The application and subscription processes are handled completely by the [CaptainDomoService](https://github.com/CaptainDomo/CaptainDomoService) REST service.

# Techstack
This GUI is implemented in AngularJS with Bootstrap CSS. 

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

# Deployment
* Copy the complete content of this directory to a web server of your choice.
* Adapt the contents of `config.json` on the web server accordingly to fit the corresponding CaptainDomoService backend.

 


