import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutProps, Layout } from './Layout'
import { Card } from 'semantic-ui-react'
import { Navbar } from '../navbar/Navbar'

configure({ adapter: new Adapter() })

const props: LayoutProps = {
  children: <Card></Card>
}

describe('<Layout />', () => {
  const wrapper = shallow(<Layout {...props} />)
  it('should have a Navbar', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1)
  })

  it('should have a main section', () => {
    expect(wrapper.find('main')).toHaveLength(1)
  })

  it('should have a footer section', () => {
    expect(wrapper.find('footer')).toHaveLength(1)
  })

  it('should have a main content that has a Card as a children', () => {
    expect(wrapper.find('main').find(Card)).toHaveLength(1)
  })
})
