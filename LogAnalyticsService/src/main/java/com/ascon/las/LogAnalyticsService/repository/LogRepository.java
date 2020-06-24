package com.ascon.las.LogAnalyticsService.repository;

import com.ascon.las.LogAnalyticsService.repository.entity.LogInfo;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends ElasticsearchRepository<LogInfo, String> {

   @Query("{\"range\" : {\"@timestamp\" : {\"gte\" : \"now-?0s/d\", \"lte\" :  \"now/d\"}}}")
   List<LogInfo> findByDateRangeByNowBySeconds(int durationInSeconds);


    @Query("{\"range\" : {\"@timestamp\" : {\"gte\" : \"now-?0d/d\", \"lte\" :  \"now/d\"}}}")
    List<LogInfo> findDateRangeByNowByDays(int durationInDays);

}
