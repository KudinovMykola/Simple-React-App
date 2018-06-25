import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import { Container, Grid, Header, Image, Menu } from 'semantic-ui-react'

class ClientList extends Component {

  showList() {
    return this.props.clients.map ((client, index) => {

      return (
        <Menu.Item
        active = {this.props.selected && this.props.selected.id == client.id }
        onClick={() => this.props.select (client)} key={client.id}>

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
      <Menu fluid vertical tabular>
        {this.showList()}
      </Menu>
    );
  }
}

function mapStateToProps (state) {
  return {
    clients: state.clients,
    selected: state.selected
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientList);
