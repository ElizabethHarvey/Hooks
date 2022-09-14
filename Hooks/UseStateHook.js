import { useState } from 'react'; // import useState from react / lets us keep th local state
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function StateHook() {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount((c) => c + 1); 
  };
  const decrement = () => {
    setCount((c) => c - 1); 
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>You clicked {count} times</Text>
      <TouchableOpacity onPress={increment}>
        <Text style={{fontSize: 30}}>
          +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text style={{fontSize: 30}}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StateHook;

// When to use useState
// if you need to update a value
// adding or subtracting
// true or false

// When not to use it
// if there are more than one sub values
