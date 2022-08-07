import React, { useMemo, useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);
  const operation = useMemo(() => expensiveOperation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const testIncrement = () => {
    setTest((c) => c + 1);
  };


  
  return (
    <>
      <View style={styles.view}>
        <Text>Count: {count}</Text>
        <TouchableOpacity onPress={increment}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>Expensive Operation: {operation}</Text>
      </View>

      <View style={styles.view}>
        <Text>Count: {test}</Text>
        <TouchableOpacity onPress={testIncrement}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const expensiveOperation = (num) => {
  console.log('Calculating...');

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
