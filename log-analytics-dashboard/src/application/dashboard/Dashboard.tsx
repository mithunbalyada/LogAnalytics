import React from 'react'
import { Layout } from '../view/layout/Layout'
import { Segment, Grid } from 'semantic-ui-react'
import { LogWidget } from './widget/log-widget/LogWidget'
import { MonitorInterval } from './widget/monitor-interval/MonitorInterval'

export const Dashboard = () => {
  return (
    <Layout>
      <Segment>
        <Grid stackable columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <LogWidget />
            </Grid.Column>
            <Grid.Column>
              <MonitorInterval />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Layout>
  )
}
