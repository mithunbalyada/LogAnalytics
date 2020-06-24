package com.ascon.las.LogAnalyticsService.repository.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "las")
public class LogInfo {

    @Id
    private String uuid;

    private String level;

    private String timestamp;

    public LogInfo(String uuid, String level, String timestamp) {
        this.uuid = uuid;
        this.level = level;
        this.timestamp = timestamp;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "LogInfo{" +
                "uuid='" + uuid + '\'' +
                ", level='" + level + '\'' +
                ", timestamp='" + timestamp + '\'' +
                '}';
    }
}
