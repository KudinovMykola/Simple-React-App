import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class ClientList extends Component {
  showList() {
    return this.props.clients.map ((client) => {
      return (
        <div onClick={() => this.props.select (client)} key={client.id}>
          <img className="avatar_item" src={client.general.avatar} alt="avatar" />
          <div className="name_item">
            {client.general.firstName} {client.general.lastName}
          </div>
          <div className="job_item">
            {client.job.title}
          </div>
        </div>
      )
    });
  }

  render () {
    return (
      <div className="client_list">
        {this.showList()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    clients: state.clients
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientList);
