import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Widget, WidgetProps } from './Widget'
import { Card } from 'semantic-ui-react'

configure({ adapter: new Adapter() })

const defaultProps: WidgetProps = {
  header: 'header',
  children: <div></div>,
  extra: <div></div>
}

const defaultPropsWithoutExtra: WidgetProps = {
  header: 'header',
  children: <div></div>
}

describe('<Widget />', () => {
  const wrapper = shallow(<Widget {...{ ...defaultProps }} />)
  it('Should render a <Card />item', () => {
    expect(wrapper.find(Card)).toHaveLength(1)
  })

  it('Should have <Card.Content> 3 times when extra is provided', () => {
    expect(wrapper.find(Card.Content)).toHaveLength(3)
  })

  it('Should have <Card.Content> 2 times only when extra is not provided', () => {
    const wrapper = shallow(<Widget {...{ ...defaultPropsWithoutExtra }} />)
    expect(wrapper.find(Card.Content)).toHaveLength(2)
  })

  it('Should have <Card.Content> header text', () => {
    const wrapper = shallow(<Widget {...{ ...defaultPropsWithoutExtra }} />)
    expect(wrapper.find(Card.Content).at(0).prop('header')).toEqual('header')
  })
})
