import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SettingsTab, SettingsTabProps } from './SettingsTab'
import { Tab } from 'semantic-ui-react'
import { SingleNumericForm } from '../../widget/SingleNumericForm'

configure({ adapter: new Adapter() })

const props: SettingsTabProps = {
  refreshInterval: 2,
  onSubmit() {
    return
  }
}

describe('<SettingsTab/>', () => {
  const wrapper = shallow(<SettingsTab {...props} />)
  it('SettingsTab should have atleast one Tab Pane', () => {
    expect(wrapper.find(Tab.Pane)).toHaveLength(1)
  })

  it('SettingsTab should have atleast one SingleNumbericForm and value should be from te props', () => {
    expect(wrapper.find(SingleNumericForm)).toHaveLength(1)
    expect(wrapper.find(SingleNumericForm).prop('value')).toEqual(props.refreshInterval)
  })
})
