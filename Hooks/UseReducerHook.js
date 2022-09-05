import { useReducer } from 'react';
import { Text, TouchableOpacity } from 'react-native';

function UseReducerHook() {
  const reducer = (state, action) => {
    let newState;
    switch (action.type) {
      case 'increase':
        newState = { counter: state.counter + 1 };
        break;
    }
    return newState;
  };

  const initialState = {
    counter: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const action = {
    type: 'increase',
  };
  // console.log(state);
  return (
    <>
      <Text style={{fontSize: 30}}>{state.counter}</Text>
      <TouchableOpacity onPress={() => dispatch(action)}>
        <Text style={{fontSize: 30}}>+</Text>
      </TouchableOpacity>
    </>
  );
}

export default UseReducerHook;

// useReducer is usually preferable to useState 
// when you have complex state logic that involves 
// multiple sub-values or when the next state depends 
// on the previous one