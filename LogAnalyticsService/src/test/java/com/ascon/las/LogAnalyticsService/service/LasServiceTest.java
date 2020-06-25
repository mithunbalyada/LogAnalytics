package com.ascon.las.LogAnalyticsService.service;

import com.ascon.las.LogAnalyticsService.exception.LasException;
import com.ascon.las.LogAnalyticsService.repository.LogRepository;
import com.ascon.las.LogAnalyticsService.repository.entity.LogInfo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class LasServiceTest {

    @MockBean
    private LogRepository logRepository;

    @Autowired
    private LasService lasService;

    @Test
    public void whenGetAllStatusByDaysThenGetGroupedResults() throws LasException {
        List<LogInfo> expectedLogInfo = new ArrayList<>();
        expectedLogInfo.add(new LogInfo("12345", "ERROR", "Some Error Msg"));

        String expectedOutput = "{\"ERROR\":1}";

        Mockito.when(logRepository.findDateRangeByNowByDays(1))
                .thenReturn(expectedLogInfo);

        Assertions.assertThat(lasService.getAllLogStatusByDays(1))
                .isEqualTo(expectedOutput);
    }

    @Test
    public void whenGetAllStatusByTimeThenGetGroupedResults() throws LasException {
        List<LogInfo> expectedLogInfo = new ArrayList<>();
        expectedLogInfo.add(new LogInfo("12345", "ERROR", "Some Error Msg"));

        String expectedOutput = "{\"ERROR\":1}";

        Mockito.when(logRepository.findByDateRangeByNowBySeconds(1))
                .thenReturn(expectedLogInfo);

        Assertions.assertThat(lasService.getAllLogStatusByTime(1))
                .isEqualTo(expectedOutput);
    }

}