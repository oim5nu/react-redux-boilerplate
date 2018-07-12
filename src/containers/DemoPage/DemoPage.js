import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as demoActions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../../components/Counter';

const DemoPage = ({value, actions}) => 
  <Counter 
    value={value}
    onIncrement={() => actions.increment() }
    onDecrement={() => actions.decrement() }
    onIncrementAsync={ () => actions.incrementAsync() }
  />;

function mapStateToProps(state) {
  return {
    value: state.get('demo').get('counter')
  }
}  

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(demoActions, dispatch)
  };
}

DemoPage.propTypes = {
  value: PropTypes.number,
  actions: PropTypes.object
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DemoPage));
