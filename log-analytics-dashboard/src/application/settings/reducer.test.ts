import React from 'react'
import { settingsReducer } from './reducer'
import { SettingsStateType, SettingsActionType } from './types'

const state: SettingsStateType = {
  refreshIntervalInSeconds: 10,
  monitorIntervalInSeconds: 5
}

describe('', () => {
  it('should handle UPDATE_REFRESH_INTERVAL', () => {
    expect(
      settingsReducer(state, {
        type: SettingsActionType.UPDATE_REFRESH_INTERVAL,
        payload: 20
      })
    ).toEqual({
      refreshIntervalInSeconds: 20,
      monitorIntervalInSeconds: 5
    })
  })

  it('should handle UPDATE_MONITOR_INTERVAL', () => {
    expect(
      settingsReducer(state, {
        type: SettingsActionType.UPDATE_MONITOR_INTERVAL,
        payload: 20
      })
    ).toEqual({
      refreshIntervalInSeconds: 10,
      monitorIntervalInSeconds: 20
    })
  })
})
