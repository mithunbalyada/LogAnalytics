package com.ascon.las.LogAnalyticsService.web;

import com.ascon.las.LogAnalyticsService.exception.LasException;
import com.ascon.las.LogAnalyticsService.service.LasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
public class LasControllerV1 implements LasController{

    private final LasService lasService;

    @Autowired
    public LasControllerV1(final LasService lasService){
        this.lasService = lasService;
    }


    @Override
    public ResponseEntity<String> getStatus()
    {
        return ResponseEntity.ok("it works");
    }


    @Override
    public ResponseEntity<String> getLogStatusByDay(@RequestParam("interval") String interval)
    {
        HttpStatus status;
        String message;
        try {
            int intervalInteger = Integer.parseInt(interval);
            String result = lasService.getAllLogStatus(intervalInteger);

            if(result != null){
                return ResponseEntity.ok(result);
            }else{
                status = HttpStatus.NO_CONTENT;
                message = "No data found";
            }
        } catch (NumberFormatException e) {
            status = HttpStatus.BAD_REQUEST;
            message = "Unable to parse 'interval' into seconds";
        } catch (LasException e){
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            message = e.getMessage();
        }

        return new ResponseEntity<>(message, status);
    }

    @Override
    public ResponseEntity<String> getLogStatusByTime(String interval) {
        return null;
    }
}
