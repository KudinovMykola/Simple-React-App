import React from 'react';
import ClientList from '../containers/ClientList'
import Details from '../containers/Details'
import { Container, Grid, Menu, Segment } from 'semantic-ui-react'


const WebPage = () => (
  <Container>
    <Grid>
      <Grid.Column width={4}>
        <ClientList />
      </Grid.Column>

      <Grid.Column width={12}>
        <Segment>
          <Details />
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
);

export default WebPage;
