import React, { useState, useTransition } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HeavyComponent from '../components/HeavyComponent';

function UseTransitionHook(props) {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }
  return (
    <View>
      {isPending && <Spinner />}
        <Text style={{fontSize: 30}}>{count}</Text>
      <TouchableOpacity onPress={handleClick}>
        <Text style={{fontSize: 30}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseTransitionHook;

// Updates in a transition will not 
// show a fallback for re-suspended 
// content. This allows the user to 
// continue interacting with the 
// current content while rendering the 
// update.
