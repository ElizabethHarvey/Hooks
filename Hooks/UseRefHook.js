import { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';

function UseRefHook() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  
  return (
    <View>
      <Text>{}</Text>
      <TouchableOpacity
        onPress={
          handle
        }
      >
        <Text>Click me </Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseRefHook;
