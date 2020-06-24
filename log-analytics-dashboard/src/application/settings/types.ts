import { Action } from 'redux'

export type SettingsStateType = {
  refreshIntervalInSeconds: number
  monitorIntervalInSeconds: number
}

export enum SettingsActionType {
  UPDATE_REFRESH_INTERVAL = 'UPDATE_REFRESH_INTERVAL',
  UPDATE_MONITOR_INTERVAL = 'UPDATE_MONITOR_INTERVAL'
}

export interface IUpdateRefreshInterval extends Action {
  type: SettingsActionType.UPDATE_REFRESH_INTERVAL
  payload: number
}

export interface IUpdateMonitorInterval extends Action {
  type: SettingsActionType.UPDATE_MONITOR_INTERVAL
  payload: number
}

export type SettingsActions = IUpdateRefreshInterval | IUpdateMonitorInterval
