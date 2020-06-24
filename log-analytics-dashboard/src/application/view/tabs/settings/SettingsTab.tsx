import React from 'react'
import { Tab } from 'semantic-ui-react'
import { SingleNumericForm } from '../../widget/SingleNumericForm'

export interface SettingsTabProps {
  refreshInterval: number
  onSubmit: (refreshInterval: number) => void
}

export const SettingsTab = (props: SettingsTabProps) => {
  return (
    <Tab.Pane attached={false}>
      <SingleNumericForm
        value={props.refreshInterval}
        label={'Refresh interval (in seconds)'}
        onSubmit={props.onSubmit}
      />
    </Tab.Pane>
  )
}
