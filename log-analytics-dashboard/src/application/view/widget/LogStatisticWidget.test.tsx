import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Statistic } from 'semantic-ui-react'
import { LogStatisticWidgetProps, LogStatisticWidget } from './LogStatisticWidget'
import { Widget } from './Widget'

configure({ adapter: new Adapter() })

const props: LogStatisticWidgetProps = {
  refreshInterval: 5,
  logInfoData: {
    ERROR: 1,
    INFO: 2,
    WARNING: 3
  }
}

describe('<LogStatisticWidget />', () => {
  const wrapper = shallow(<LogStatisticWidget {...props} />)
  it('Should have one <Widget> element', () => {
    expect(wrapper.find(Widget)).toHaveLength(1)
  })

  it('Should have one 3 statistics', () => {
    expect(wrapper.find(Statistic)).toHaveLength(3)
  })

  it('Should have first one in Red Color', () => {
    expect(wrapper.find(Statistic).at(0).prop('color')).toEqual('red')
  })

  it('Should have first statistic lable = ERROR ', () => {
    expect(wrapper.find(Statistic).at(0).find(Statistic.Label).render().text()).toEqual('ERROR')
  })
  it('Should have 2 INFO in third statistics ', () => {
    expect(wrapper.find(Statistic).at(2).find(Statistic.Value).render().text()).toEqual('2')
  })
  it('Should have 3 WARNING in second statistics ', () => {
    expect(wrapper.find(Statistic).at(1).find(Statistic.Value).render().text()).toEqual('3')
  })
})
