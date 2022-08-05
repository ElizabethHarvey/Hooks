import { useState } from 'react'; // import useState from react / lets us keep th local state
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function StateHook() {
  const [count, setCount] = useState(0); // were declaring a new variable
  // 0 is the initial value the button clicks start off with
  // count holds the number of button clicks
  // setCount lets us update the count of the initial state

  const increment = () => {
    setCount((c) => c + 1); // increments the count / adds 1 to the initial state or current state
  };

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <TouchableOpacity onPress={increment}>
        <Text>
          +
          {
            // when clicked we call the setCount with a new value
            // react will re render passing th new count value to it
          }
        </Text>
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