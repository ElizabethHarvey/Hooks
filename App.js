import React, { useId } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectHook from "./Hooks/UseEffectHook";

export default function App() {
  return (
    <View style={styles.container}>
      <UseEffectHook />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



