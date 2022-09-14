import React, { useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const UseCallbackHook = () => {
  const a = 5;
  const b = 7;

  const memoizedCallback = useCallback(() => a + b, [a, b]);
  const memoizedValue = useCallback(a + b, [a, b]);

  

  return (
    <View>
      <TouchableOpacity onPress={() => console.log(memoizedCallback())}>
        <Text>Trigger Callback</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log(memoizedValue)}>
        <Text>Trigger Value</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseCallbackHook;

// Both the useEffect and the button click yield the same result.

// Note that the concepts, do’s, and don’ts that apply to
// the useMemo hook also apply to the useCallback hook.

// useCallback returns its function when the dependencies
// change while useMemo calls its function and returns the result

// useCallback will return a memoized value. However,
// we could also make it return a memoized callback by
// passing it as a function


// useCallback serves the same purpose as useMemo but it 
// returns a memoized callback instead of a memoized value. 
// In other words, useCallback is the same as passing 
// useMemo without a function call.

