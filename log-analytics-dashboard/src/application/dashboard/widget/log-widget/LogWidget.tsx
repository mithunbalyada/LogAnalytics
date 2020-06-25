import React, { useEffect, useState } from 'react'
import { StateType } from '../../../../store/state'
import { useSelector } from 'react-redux'
import { LogInfoType } from './types'
import axios from '../../../../axios'
import { LogStatisticWidget } from '../../../view/widget/LogStatisticWidget'

export const LogWidget = () => {
  const { refreshIntervalInSeconds, monitorIntervalInSeconds } = useSelector((state: StateType) => state.settings)
  const [logInfoData, setLogInfoData] = useState<LogInfoType>()

  const loadData = async (seconds: number) => {
    console.log('fetch /logStatus')
    const response = axios.get('/api/v1/logStatusByTime?interval=' + monitorIntervalInSeconds)
    setLogInfoData((await response).data)
  }

  useEffect(() => {
    loadData(monitorIntervalInSeconds)
    const interval = setInterval(() => {
      loadData(monitorIntervalInSeconds)
    }, refreshIntervalInSeconds * 1000)
    return () => clearInterval(interval)
  }, [refreshIntervalInSeconds, monitorIntervalInSeconds]) // eslint-disable-line

  return (
    <>
      {logInfoData ? <LogStatisticWidget refreshInterval={refreshIntervalInSeconds} logInfoData={logInfoData} /> : ''}
    </>
  )
}
