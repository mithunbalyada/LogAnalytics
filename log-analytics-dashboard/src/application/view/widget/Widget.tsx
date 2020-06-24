import React, { ReactNode } from 'react'
import { Card } from 'semantic-ui-react'

export interface WidgetProps {
  header?: string
  children: ReactNode
  extra?: ReactNode
}

export const Widget = (props: WidgetProps) => {
  return (
    <Card fluid>
      <Card.Content header={props.header} />
      <Card.Content>{props.children}</Card.Content>
      {props.extra ? <Card.Content extra>{props.extra}</Card.Content> : ''}
    </Card>
  )
}
