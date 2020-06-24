import React, { useCallback } from 'react'
import { Layout } from '../view/layout/Layout'
import { Tab } from 'semantic-ui-react'
import { SettingsTab } from '../view/tabs/settings/SettingsTab'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from '../../store/state'
import * as actions from './action'

export const Settings = () => {
  const refreshInterval = useSelector((state: StateType) => state.settings.refreshIntervalInSeconds)

  const dispatch = useDispatch()

  const updateRefreshInterval = useCallback(
    (refreshInterval: number) => {
      dispatch(actions.updateRefreshInterval(refreshInterval))
    },
    [dispatch]
  )

  const onSubmit = (updatedValue: number) => {
    if (updatedValue !== refreshInterval) {
      updateRefreshInterval(updatedValue)
      alert(`Refresh innterval updated to ${updatedValue} seconds`)
    }
  }

  return (
    <Layout>
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={[
          {
            menuItem: 'Settings',
            render: () => <SettingsTab onSubmit={onSubmit} refreshInterval={refreshInterval} />
          }
        ]}
      />
    </Layout>
  )
}
