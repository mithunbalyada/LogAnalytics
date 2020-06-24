package com.ascon.las.LogAnalyticsService.service;

import com.ascon.las.LogAnalyticsService.exception.LasException;
import com.ascon.las.LogAnalyticsService.repository.LogRepository;
import com.ascon.las.LogAnalyticsService.repository.entity.LogInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;


@Service
public class LasService {
    private static final Logger LOGGER = LoggerFactory.getLogger(LasService.class);
    private final LogRepository logRepository;


    @Autowired
    public LasService(final LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    /**
     * Gets logs status by number of days. For ex, if the input is 1 - this service finds logs
     * which are gte = sysdate -1 and lte = sysdate
     * @param days - No of days for which logs have to be queried.
     * @return - returns Json data with events grouped by their name.
     * @throws LasException - Any internal processing error
     */
    public String getAllLogStatusByDays(int days) throws LasException {
        LOGGER.info("findByDateRange - looks logs for interval in days {}", days);
        return getStringOutputFromStreams(logRepository.findDateRangeByNowByDays(1));
    }

    /**
     * Gets logs status by number of seconds. For ex, if the input is 5- this service finds logs
     * which occurred in last 5 seconds from System Date
     * @param seconds - No of seconds from system date for which logs have to be queried.
     * @return - returns Json data with events grouped by their name.
     * @throws LasException - Any internal processing error
     */
    public String getAllLogStatusByTime(int seconds) throws LasException {
        LOGGER.info("findByDateRange - looks logs for interval in seconds {}", seconds);
        return getStringOutputFromStreams(logRepository.findByDateRangeByNowBySeconds(seconds));
    }



    private String getStringOutputFromStreams(List<LogInfo> logInfoList) throws LasException{
        try {
            Map<String, Long> groupBy = logInfoList.stream()
                    .map(LogInfo::getLevel)
                    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

            if (groupBy.size() > 0) {
                return new ObjectMapper().writeValueAsString(groupBy);
            }

        } catch (JsonProcessingException e) {
            LOGGER.error("Unable to process data and convert it into Json data.");
            throw new LasException("Unable to process data and convert it into Json data.", e);
        }
        return null;
    }


}


