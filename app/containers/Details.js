import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render () {
    if(!this.props.selected) {
      return (<div>Choose client</div>);
    }

    return (
      <div>
        <img className="avatar_details" src={this.props.selected.general.avatar}
         alt="avatar" />
        <div className="name_details">
          {this.props.selected.general.firstName + " " +
          this.props.selected.general.lastName}
        </div>
        <div className="job_details">
          {this.props.selected.job.title + " - " +
          this.props.selected.job.company}
        </div>
        <div className="email_details">
          {"Email: " + this.props.selected.contact.email}
        </div>
        <div className="phone_details">
          {"Phone: " + this.props.selected.contact.phone}
        </div>
        <div className="address">
          <p>{this.props.selected.address.street}</p>
          <p>{this.props.selected.address.city}</p>
          <p>{this.props.selected.address.zipCode}</p>
          <p>{this.props.selected.address.country}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    selected: state.selected
  };
}

export default connect(mapStateToProps)(Details);
