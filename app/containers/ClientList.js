import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ClientList extends Component {
  showList() {
    return this.props.clients.map ((client) => {
      return (
        <div key={client.id}>
          <img class="avatar_item" src={client.general.avatar} alt="avatar" />
          <div class="name_item">
            {client.general.firstName} {client.general.lastName}
          </div>
          <div class="job_item">
            {client.job.title}
          </div>
        </div>
      )
    });
  }

  render () {
    return (
      <div class="client_list">
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

export default connect(mapStateToProps)(ClientList);
