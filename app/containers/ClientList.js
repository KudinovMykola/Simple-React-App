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
    word = word.toLowerCase();
    var first_name = [];
    var last_name = [];
    var company = [];
    var title_job = [];
    var phone = [];
    var email = [];
    var country = [];
    var city = [];
    var street = [];
    var zip_code = [];

    list.map ((client) => {

      if(client.general.firstName.toLowerCase().includes(word)) {
        first_name.push(client);
      } else if(client.general.lastName.toLowerCase().includes(word)) {
        last_name.push(client);
      } else if(client.job.company.toLowerCase().includes(word)) {
        company.push(client);
      } else if(client.job.title.toLowerCase().includes(word)) {
        title_job.push(client);
      } else if(client.contact.phone.toLowerCase().includes(word)) {
        phone.push(client);
      } else if(client.contact.email.toLowerCase().includes(word)) {
        email.push(client);
      } else if(client.address.country.toLowerCase().includes(word)) {
        country.push(client);
      } else if(client.address.city.toLowerCase().includes(word)) {
        city.push(client);
      } else if(client.address.street.toLowerCase().includes(word)) {
        street.push(client);
      } else if(client.address.zipCode.toLowerCase().includes(word)) {
        zip_code.push(client);
      }

    });

    var result = first_name.concat(last_name,
      company, title_job,
      phone, email,
      country, city, street, zip_code );
    return result;
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
