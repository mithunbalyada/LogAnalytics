import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Navbar } from './Navbar'

configure({ adapter: new Adapter() })

describe('<Navbar/>', () => {
  const wrapper = shallow(<Navbar />)
  it('Navbar should have header', () => {
    expect(wrapper.find('div').find('header')).toHaveLength(1)
  })

  it('Navbar should have nav tags', () => {
    expect(wrapper.find('div').find('header').find('nav')).toHaveLength(1)
  })
})
