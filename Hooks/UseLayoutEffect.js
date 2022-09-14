import React, { useLayoutEffect, useState } from 'react';
import { Text, View } from 'react-native';

const useLayoutEffectHook = () => {
  const [value, setValue] = useState('LayoutEffect');

  useLayoutEffect(() => {
    if (value === 'LayoutEffect') {
      // Changing the state
      setValue('Effect');
    }
    console.log('UseLayoutEffect is called with the value of ', value);
  }, [value]);

  return (
    <View>
      <Text>{value} is the greatest portal for geeks!</Text>
    </View>
  );
};

export default useLayoutEffectHook;
