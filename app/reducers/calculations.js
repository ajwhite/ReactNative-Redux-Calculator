'use strict';

import {
  NUMBER_INPUT,
  NUMBER_SIGNED_INPUT,
  DECIMAL_INPUT,
  OPERATION_INPUT,
  UNDO,
  CALCULATE
} from '../actions/types';

const integerSigns = {
  POSITIVE: 'POSTIIVE',
  NEGATIVE: 'NEGATIVE'
};

const initialState = {
  positive: true,
  lastOperation: null,
  currentInput: [],
  history: [{
    input: 10,
    operation: 'add'
  }, {
    input: 10,
    operation: 'add'
  }]
};

export default function calculationReducer (state = initialState, action) {
  var currentInput = state.currentInput.slice();
  switch(action.type) {
    case NUMBER_INPUT:
      currentInput.push(action.value);
      return {
        ...state,
        currentInput
      };
    case NUMBER_SIGNED_INPUT:
      return {
        ...state,
        positive: !state.positive
      };
    case DECIMAL_INPUT:
      // only allow one decimal
      if (state.currentInput.indexOf('.') > -1) {
        return state;
      }
      currentInput.push('.');
      return {
        ...state,
        currentInput
      };
    case OPERATION_INPUT:
      // calculate current input against value of last history item, then reset the integer sign
      // set currentInput to the calculated value
      return {
        ...state,
        lastOperation: action.operation,
        positive: true
      };
    case UNDO:
      return {
        ...state,
        positive: true,
        currentInput: [],
        history: state.history.slice(0, state.history.length - 2)
      };
    case CALCULATE:
      // calcluate the current input with the last operation, set currentInput to the calcluated value
      return {
        ...state
      };
    default:
      return state;
  }
}
