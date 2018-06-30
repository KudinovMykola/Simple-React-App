import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment } from 'semantic-ui-react';

class Details extends Component {
  render () {
    if(!this.props.selected) {
      return (<Container>Choose client</Container>);
    }

    return (
      <Grid>
        <Grid.Column width={4}>
          <Image size='medium'src={this.props.selected.general.avatar} />
        </Grid.Column>

        <Grid.Column width={12}>
          <Header.Content as="h3">
            {this.props.selected.general.firstName + " " +
            this.props.selected.general.lastName}
          </Header.Content>
          <Header.Subheader as="h4">
            {this.props.selected.job.title + " - " +
            this.props.selected.job.company}
          </Header.Subheader>
          <Container>
            <p>
              <Icon name='envelope' />{' ' + this.props.selected.contact.email}
              <br />
              <Icon name='phone' />{' '+this.props.selected.contact.phone}
            </p>
            <p>
              {this.props.selected.address.street}<br />
              {this.props.selected.address.city}<br />
              {this.props.selected.address.zipCode}<br />
              {this.props.selected.address.country}<br />
            </p>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps (state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(Details);
