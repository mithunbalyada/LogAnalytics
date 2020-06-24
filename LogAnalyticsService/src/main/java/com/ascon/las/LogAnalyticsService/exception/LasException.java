package com.ascon.las.LogAnalyticsService.exception;

public class LasException extends Exception{
    public LasException(String message) {
        super(message);
    }

    public LasException(String message, Throwable cause) {
        super(message, cause);
    }
}
