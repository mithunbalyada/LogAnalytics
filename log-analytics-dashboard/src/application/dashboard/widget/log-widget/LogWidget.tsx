import React, { useEffect, useState } from 'react'
import { StateType } from '../../../../store/state'
import { useSelector } from 'react-redux'
import { LogInfoType } from './types'
import axios from '../../../../axios'
import { LogStatisticWidget } from '../../../view/widget/LogStatisticWidget'

export const LogWidget = () => {
  const refreshInterval = useSelector((state: StateType) => state.settings.refreshIntervalInSeconds)
  const [logInfoData, setLogInfoData] = useState<LogInfoType>()

  const loadData = async () => {
    console.log('fetch /logStatus')
    const response = axios.get('/logStatus')
    setLogInfoData((await response).data)
  }

  useEffect(() => {
    loadData()
    const interval = setInterval(() => {
      loadData()
    }, refreshInterval * 1000)
    return () => clearInterval(interval)
  }, []) //eslint-disable-line

  return <>{logInfoData ? <LogStatisticWidget refreshInterval={refreshInterval} logInfoData={logInfoData} /> : ''}</>
}
