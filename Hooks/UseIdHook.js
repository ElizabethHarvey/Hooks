import React, { useId } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function UseIdHook() {
  const id1 = useId();
  // const id2 = () => useId();
  return (
    <>
      <View style={styles.view}>
        <Text>This id1 is {id1}</Text>
        <Text>This id2 is </Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
