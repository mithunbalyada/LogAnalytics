package com.ascon.las.LogAnalyticsService.service;

import com.ascon.las.LogAnalyticsService.repository.LogRepository;
import com.ascon.las.LogAnalyticsService.repository.entity.LogInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LasService {

    private final LogRepository logRepository;

    @Autowired
    public LasService(final LogRepository logRepository){
        this.logRepository = logRepository;
    }

    public String getAllLogStatus(){

        Iterable<LogInfo> logInfos = logRepository.findAll();

        logInfos.forEach(System.out::println);

        return null;
    }

}
