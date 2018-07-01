import React from 'react';
import ClientList from '../containers/ClientList';
import Details from '../containers/Details';
import SearchBar from '../containers/SearchBar';
import { Container, Grid, Menu, Segment } from 'semantic-ui-react';


const WebPage = () => (
  <Container>
    <Grid celled>
      <Grid.Column width={4} >
        <SearchBar />
        <ClientList />
      </Grid.Column>

      <Grid.Column width={12} >
        <Segment>
          <Details />
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
);

export default WebPage;
