import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dashboard } from './Dashboard'
import { Layout } from '../view/layout/Layout'

configure({ adapter: new Adapter() })

describe('<Dashboard />', () => {
  it('Dashboard should contain Layout', () => {
    const wrap = shallow(<Dashboard />)
    expect(wrap.find(Layout).length).toBeGreaterThan(0)
  })
})
