import React from 'react'
import { Widget } from './Widget'
import { Statistic, Label } from 'semantic-ui-react'
import { LogInfoType } from '../../dashboard/widget/log-widget/types'

export interface LogStatisticWidgetProps {
  refreshInterval: number
  logInfoData: LogInfoType
}

export const LogStatisticWidget = (props: LogStatisticWidgetProps) => {
  const extra = (
    <span>
      Auto refreshing every{' '}
      <Label circular color={'blue'} key={'blue'}>
        {props.refreshInterval}
      </Label>{' '}
      sec
    </span>
  )

  return (
    <>
      <Widget header="System Logs Metrics" extra={extra}>
        <Statistic color="red">
          <Statistic.Value>{props.logInfoData?.ERROR}</Statistic.Value>
          <Statistic.Label>ERROR</Statistic.Label>
        </Statistic>
        <Statistic color="yellow">
          <Statistic.Value>{props.logInfoData?.WARNING}</Statistic.Value>
          <Statistic.Label>warning</Statistic.Label>
        </Statistic>
        <Statistic color="grey">
          <Statistic.Value>{props.logInfoData?.INFO}</Statistic.Value>
          <Statistic.Label>info</Statistic.Label>
        </Statistic>
      </Widget>
    </>
  )
}
