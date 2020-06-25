import React from 'react'
import { configure, shallow } from 'enzyme'
import { SettingsActions, SettingsActionType } from './types'
import * as actions from './action'

describe('Settings Actions', () => {
  it('Should create an action to update Refresh Interval', () => {
    const expectedAction: SettingsActions = {
      type: SettingsActionType.UPDATE_REFRESH_INTERVAL,
      payload: 20
    }
    expect(actions.updateRefreshIntervalAction(20)).toEqual(expectedAction)
  })

  it('Should create an action to update Monitoring Interval', () => {
    const expectedAction: SettingsActions = {
      type: SettingsActionType.UPDATE_MONITOR_INTERVAL,
      payload: 10
    }
    expect(actions.updateMonitorIntervalAction(10)).toEqual(expectedAction)
  })
})
