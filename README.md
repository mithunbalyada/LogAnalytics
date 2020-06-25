## Log file analytics dashboard

This project uses Docker images of each of the below services which are orchestrated by Docker Compose. This scalable setup can be easily used in production and can be ported to K8s clusters as well.

Jump to [Running the application](#running-the-application)

- **ReactJS**

  Front end dashboard application that can also change monitoring and refresh interval of the dashboard. Uses create-react-app

- **SpringBoot**

  Backend microservice that implements Spring Data elastic serach and uses `painless` query to fetch indexed data from elastic search. Refer to http://localhost:8080/swagger-ui.html for endpoint details.

- **Filebeat**

  Monitoring a log file and streams each line as an event to Logstash

- **Logstash**

  Receives output from filebeat, indexes it and parses line into fields. Also, it applies transformation for log date format. Refere to _logstash/logstash.conf_ for more information

* **Elastic Search**

  Works as data store for Spring boot implementation. Stores every indexed data identitied by FileBeat.

## Optional configuration

Kibana is a visualization tool in the popular Elastic stack.
Kibana docker images can be included in `docker-compose.yml` and more insights on the data can be derieved.

## Running the application

- Clone this repository

- Make sure you have `docker` and `docker-compose` installed

- Mount relevant files which have to be watched. (Refere to docker-compose.yml and filebeat/filebeat.yml)

- Build all images using docker-compose
  ```docker
  docker-compose build
  ```
- Run using docker-compose
  ```docker
  docker-compose up
  ```
- Accees dashboard on http://localhost:3000
