import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setFilter} from '../actions/index';
import {Search} from 'semantic-ui-react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {  value: '' };
  }

  render () {

    return (
      <Search
        loading={false}
        results={[]}
        value={this.state.value}
        showNoResults = {false}
        onSearchChange={(e, { value }) => {
            this.state.value = value;
            this.props.filter(this.state.value);
          }}
      />
    );
  }

}

function mapStateToProps (state) {
  return {
    filter_word: state.filter
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({filter: setFilter}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);
