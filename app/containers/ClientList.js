import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select, ajaxRequestFunction} from '../actions/index';
import { Container, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'


class ClientList extends Component {

  showList() {
    return this.props.clients.map ( (client) => {

      return (
        <Menu.Item
        active = {this.props.selected &&
           this.props.selected.contact.email == client.contact.email }
        onClick={() => this.props.select (client)} key={client.contact.email}>

          <Grid>
            <Grid.Column width={6}>
              <Image size='small' src={client.general.avatar} alt="avatar"  />
            </Grid.Column>
            <Grid.Column width={9}>
              <Container fluid>
                <p>{client.general.firstName} {client.general.lastName}</p>
                <p>{client.job.title}</p>
              </Container>
            </Grid.Column>
          </Grid>

        </Menu.Item>
      )
    });
  }

  render () {
    return (
      <Segment>

        <Menu fluid vertical tabular>
          {this.showList()}
        </Menu>

        {this.props.load ("")}

      </Segment>
    );
  }
}

function filterList(list, word) {
  if(word === '')
    return list;
  else {
    return list.filter(client => client.general.firstName.includes(word));
  }
}

function mapStateToProps (state) {
  return {
    clients: filterList(state.clients, state.filter),
    selected: state.selected
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    select: select,
    load: ajaxRequestFunction}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientList);
