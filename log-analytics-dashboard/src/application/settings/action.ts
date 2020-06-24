import { Dispatch } from 'redux'
import { SettingsActions, SettingsActionType } from './types'

export const updateRefreshIntervalAction = (data: number): SettingsActions => {
  return {
    type: SettingsActionType.UPDATE_REFRESH_INTERVAL,
    payload: data
  }
}

export const updateRefreshInterval = (refreshInterval: number) => {
  return (dispatch: Dispatch<SettingsActions>) => {
    dispatch(updateRefreshIntervalAction(refreshInterval))
  }
}

export const updateMonitorIntervalAction = (data: number) => {
  return {
    type: SettingsActionType.UPDATE_MONITOR_INTERVAL,
    payload: data
  }
}

export const updateMonitorInterval = (data: number) => {
  return (dispatch: Dispatch<SettingsActions>) => {
    dispatch(updateMonitorIntervalAction(data))
  }
}
