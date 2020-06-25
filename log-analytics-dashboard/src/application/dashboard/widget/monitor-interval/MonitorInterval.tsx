import React, { useCallback } from 'react'
import { Widget } from '../../../view/widget/Widget'
import { SingleNumericForm } from '../../../view/widget/SingleNumericForm'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from '../../../../store/state'
import * as actions from '../../../settings/action'

export const MonitorInterval = () => {
  const monitorIntervalInSeconds = useSelector((state: StateType) => state.settings.monitorIntervalInSeconds)

  const dispatch = useDispatch()

  const updateMonitorInterval = useCallback((num: number) => dispatch(actions.updateMonitorInterval(num)), [dispatch])

  const onSubmit = (updatedValue: number) => {
    if (updatedValue !== monitorIntervalInSeconds) {
      updateMonitorInterval(updatedValue)
      alert('Monitor interval updated to ' + updatedValue + ' seconds')
    }
  }

  return (
    <>
      <Widget header="System Logs Metrics">
        <SingleNumericForm
          label={'Update monitor interval (in seconds)'}
          value={monitorIntervalInSeconds}
          onSubmit={onSubmit}
        />
      </Widget>
    </>
  )
}
