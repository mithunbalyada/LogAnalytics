package com.ascon.las.LogAnalyticsService.web;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface LasController {

    @CrossOrigin
    @GetMapping("/status")
    @ApiOperation(value = "Get the status of micro service", produces = "application/text", response = String.class)
    public ResponseEntity<String> getStatus();

    @CrossOrigin
    @GetMapping(value = "/logStatusByTime")
    @ApiOperation(value = "Get log status by interval in seconds from the current system date time.", produces = "application/json", response = String.class)
    @ApiParam(name = "interval", value = "time interval in seconds")
    public ResponseEntity<String> getLogStatusByTime(@RequestParam("interval") String interval);

    @CrossOrigin
    @GetMapping(value = "/logStatusByDay")
    @ApiOperation(value = "Get log status by interval in days from the current system date time.", produces = "application/json", response = String.class)
    @ApiParam(name = "day", value = "No of days from current date for which the logger metrics are needed.")
    public ResponseEntity<String> getLogStatusByDay(@RequestParam("days") String interval);

}
