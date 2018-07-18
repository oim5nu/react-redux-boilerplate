import React from 'react';
import PropTypes from 'prop-types';
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync}) =>
  <div className="w-100 vh-100">
    <button onClick={onIncrementAsync}>
      onIncrementAsync
    </button>
    {' '}    
    <button onClick={onIncrement}>
      onIncrement
    </button>
    {' '}
    <button onClick={onDecrement}>
      onDecrement
    </button>
    <hr />
    <div>
      Clicked: {value} items
    </div>
  </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;