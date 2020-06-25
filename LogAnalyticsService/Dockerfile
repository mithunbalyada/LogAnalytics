FROM gradle:6.5.0-jdk8 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle bootJar --no-daemon 

FROM openjdk:8-jre-slim

EXPOSE 8080

RUN mkdir /app

COPY --from=build /home/gradle/src/build/libs/LogAnalyticsService*.jar /app/las.jar

ENTRYPOINT ["java","-jar","/app/las.jar"]