import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SingleNumericForm, SingleNumericFormProps } from './SingleNumericForm'
import { Form, Button } from 'semantic-ui-react'

configure({ adapter: new Adapter() })

const props: SingleNumericFormProps = {
  label: 'label',
  value: 20,
  onSubmit() {
    return
  }
}

describe('<SingleNumericForm />', () => {
  const wrapper = shallow(<SingleNumericForm {...props} />)
  it('should have only one <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1)
  })
  it('should have only one <Button>', () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  })
  it('should have only one <Form.Field>', () => {
    expect(wrapper.find(Form.Field)).toHaveLength(1)
  })
  it('<input> should take only numeric value', () => {
    const wrapper = shallow(<SingleNumericForm {...props} />)
    wrapper.find('input').simulate('change', {
      target: { value: '123' }
    })

    expect(wrapper.find('input').prop('value')).toEqual('123')
  })

  it('<input> should not accept non-numeric value', () => {
    const wrapper = shallow(<SingleNumericForm {...props} />)
    wrapper.find('input').simulate('change', {
      target: { value: 'abc' }
    })

    expect(wrapper.find('input').prop('value')).toEqual('')
  })
})
