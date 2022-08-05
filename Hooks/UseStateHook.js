import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

function StateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </View>
  );
}

export default StateHook;