// import { useReducer } from 'react';
// import { TouchableOpacity } from 'react-native';

// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function useReducerHook() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <TouchableOpacity onPress={() => dispatch({type: 'decrement'})}>-</TouchableOpacity>
//       <TouchableOpacity onPress={() => dispatch({type: 'increment'})}>+</TouchableOpacity>
//     </>
//   );
// }

// export default useReducerHook;