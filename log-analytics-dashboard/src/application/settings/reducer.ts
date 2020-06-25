import { SettingsStateType, SettingsActions, SettingsActionType } from './types'

const getRefreshIntervalFromEnv = () => {
  const refreshIntervalInSecondsEnvVal = process.env.REACT_APP_DASHBOARD_REFRESH_INTERVAL
  return typeof refreshIntervalInSecondsEnvVal !== undefined && !isNaN(refreshIntervalInSecondsEnvVal as any)
    ? Number(refreshIntervalInSecondsEnvVal)
    : 10
}

const getMonitorIntervalFromEnv = () => {
  const monitorIntervalInSecondsEnvVal = process.env.REACT_APP_DASHBOARD_MONITOR_INTERVAL
  return typeof monitorIntervalInSecondsEnvVal !== undefined && !isNaN(monitorIntervalInSecondsEnvVal as any)
    ? Number(monitorIntervalInSecondsEnvVal)
    : 10
}

const initialSettingsState: SettingsStateType = {
  refreshIntervalInSeconds: getRefreshIntervalFromEnv(),
  monitorIntervalInSeconds: getMonitorIntervalFromEnv()
}

export const settingsReducer = (state = initialSettingsState, action: SettingsActions) => {
  switch (action.type) {
    case SettingsActionType.UPDATE_REFRESH_INTERVAL:
      return { ...state, refreshIntervalInSeconds: action.payload }

    case SettingsActionType.UPDATE_MONITOR_INTERVAL:
      return { ...state, monitorIntervalInSeconds: action.payload }

    default:
      return state
  }
}
