import React from 'react';
import ClientList from '../containers/ClientList'
import Details from '../containers/Details'

const WebPage = () => (
  <div>
    <h3>Clients</h3>
    <ClientList />
    <h3>Details</h3>
    <Details />
  </div>
);

export default WebPage;
