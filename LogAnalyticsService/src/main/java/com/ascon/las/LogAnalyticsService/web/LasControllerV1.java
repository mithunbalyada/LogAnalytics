package com.ascon.las.LogAnalyticsService.web;

import com.ascon.las.LogAnalyticsService.exception.LasException;
import com.ascon.las.LogAnalyticsService.service.LasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
public class LasControllerV1 implements LasController{

    private final LasService lasService;

    private enum IntervalType{
        TIME,
        DAYS
    }

    @Autowired
    public LasControllerV1(final LasService lasService){
        this.lasService = lasService;
    }


    @Override
    public ResponseEntity<String> getStatus()
    {
        return ResponseEntity.ok("It works");
    }


    @Override
    public ResponseEntity<String> getLogStatusByDay(String days)
    {
        return getLogStatus(days, IntervalType.DAYS);
    }

    @Override
    public ResponseEntity<String> getLogStatusByTime(String interval) {
        return getLogStatus(interval, IntervalType.TIME);
    }



    private ResponseEntity<String> getLogStatus(String interval, IntervalType intervalType){

        HttpStatus status;
        String message;
        try {
            int intervalInteger = Integer.parseInt(interval);

            String result;

            if (intervalType == IntervalType.DAYS)
                result = lasService.getAllLogStatusByDays(intervalInteger);
            else
                result = lasService.getAllLogStatusByTime(intervalInteger);

            if(result != null){
                return ResponseEntity.ok(result);
            }
            status = HttpStatus.NO_CONTENT;
            message = "No data found";

        } catch (NumberFormatException e) {
            status = HttpStatus.BAD_REQUEST;
            message = "Unable to parse 'interval' into seconds";
        } catch (LasException e){
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            message = e.getMessage();
        }

        return new ResponseEntity<>(message, status);
    }


}
