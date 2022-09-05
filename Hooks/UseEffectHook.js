import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log( `You clicked ${count} times`);
  }, [count]);

  return (
    <View style={styles.clicker}>
      <Text style={{fontSize: 30}}>You Clicked {count} times</Text>
      {/* {console.log( `You clicked ${count} times`)} */}
      <Button style={{fontSize: 30}} onPress={() => setCount(count + 1)} title = 'Click me'></Button>
    </View>
  );
}



export default UseEffectHook;

// useEffect lets us perform side effects in function components.
// Side effects are when we need to reach into the outside world (Outside the function). Such as fetching data from an API or working with the DOM.
// useEffect accepts a callback function (called the 'effect' function), which will by default run every time the component re-renders.


// What is a side-effect: If the functional component makes calculations =>
// that don't target the output value, then these calculations are named side-effects.
