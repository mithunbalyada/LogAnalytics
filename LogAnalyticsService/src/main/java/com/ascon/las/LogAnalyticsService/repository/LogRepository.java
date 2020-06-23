package com.ascon.las.LogAnalyticsService.repository;

import com.ascon.las.LogAnalyticsService.repository.entity.LogInfo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends ElasticsearchRepository<LogInfo, String> {

   //List<LogInfo> findByDateTimeCustomQuery(int durationInSeconds);
}
