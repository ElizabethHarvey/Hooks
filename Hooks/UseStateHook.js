import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function StateHook() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <TouchableOpacity onPress={increment}>
        <Text>+</Text>
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
