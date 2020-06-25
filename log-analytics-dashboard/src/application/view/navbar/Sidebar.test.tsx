import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SidebarProps, Sidebar } from './Sidebar'

configure({ adapter: new Adapter() })

const props: SidebarProps = {
  sideBarOpen: true,
  closeSideNav(e) {
    return
  }
}

describe('<SideBar />', () => {
  it('Sidebar should not be displyaed if props.sideBarOpen = false', () => {
    const wrap = shallow(<Sidebar {...{ ...props, sideBarOpen: false }} />)
    expect(wrap.text()).toEqual('')
  })

  it('Sidebar should  displyaed if props.sideBarOpen = true and should display navigation', () => {
    const wrap = shallow(<Sidebar {...props} />)
    expect(wrap.find('aside').find('nav')).toHaveLength(1)
  })
})
