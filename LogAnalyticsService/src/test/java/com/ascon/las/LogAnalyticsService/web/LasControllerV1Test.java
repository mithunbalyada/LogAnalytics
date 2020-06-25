package com.ascon.las.LogAnalyticsService.web;

import com.ascon.las.LogAnalyticsService.exception.LasException;
import com.ascon.las.LogAnalyticsService.service.LasService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@AutoConfigureMockMvc
@SpringBootTest
public class LasControllerV1Test {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LasService lasService;

    @Test
    public void shouldReturnDefaultStatusMessage() throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/status"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("It works"));
    }

    @Test
    public void getStatusByTimeWhenNoDataFoundThenReturnNoContent() throws Exception {

        Mockito.when(lasService.getAllLogStatusByTime(1)).thenReturn(null);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/logStatusByTime?interval=1"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNoContent())
                .andExpect(MockMvcResultMatchers.content().string("No data found"));
    }

    @Test
    public void getStatusByDaysWhenNoDataFoundThenReturnNoContent() throws Exception {

        Mockito.when(lasService.getAllLogStatusByDays(1)).thenReturn(null);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/logStatusByDay?days=1"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNoContent())
                .andExpect(MockMvcResultMatchers.content().string("No data found"));
    }

    @Test
    public void getStatusByDaysWhenExceptionThenReturnInternalError() throws Exception {

        Mockito.when(lasService.getAllLogStatusByDays(1)).thenThrow(LasException.class);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/logStatusByDay?days=1"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isInternalServerError());
    }

    @Test
    public void getStatusByTimeWhenWrongDataThenReturnBadRequest() throws Exception {
        Mockito.when(lasService.getAllLogStatusByTime(1)).thenReturn(null);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/logStatusByTime?interval=1w"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

}