import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'

export interface SingleNumericFormProps {
  label: string
  value: number
  onSubmit: (data: number) => void
}

export const SingleNumericForm = (props: SingleNumericFormProps) => {
  const [inputVal, setInputVal] = useState<string>('')

  /*Upate local state with the default value in the store.*/
  useEffect(() => {
    setInputVal(String(props.value))
  }, [setInputVal, props.value])

  /**
   * Allows only number to be entered in the textbox.
   * @param e : React Change Event from Input Element
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/

    if (e.target.value === '' || re.test(e.target.value)) {
      setInputVal(e.target.value)
    }
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.onSubmit(Number(inputVal))
  }
  return (
    <>
      <Form>
        <Form.Field inline>
          <label>{props.label}</label>
          <input pattern="[0-9]*" onChange={onChange} value={inputVal} />
          <Button style={{ margin: '0 10px' }} onClick={onSubmit}>
            Save
          </Button>
        </Form.Field>
      </Form>
    </>
  )
}
