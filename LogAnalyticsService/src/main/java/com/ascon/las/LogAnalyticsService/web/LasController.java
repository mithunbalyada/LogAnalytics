package com.ascon.las.LogAnalyticsService.web;

import com.ascon.las.LogAnalyticsService.service.LasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LasController {

    private final LasService lasService;

    @Autowired
    public LasController(final LasService lasService){
        this.lasService = lasService;
    }

    @GetMapping("/test")
    public ResponseEntity<String> getStatus()
    {
        lasService.getAllLogStatus();
        return ResponseEntity.ok("it works");
    }

}
