import React, { useId } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectHook from './Hooks/UseEffectHook';
import UseReducerHook from './Hooks/UseReducerHook';
import UseTransitionHook from './Hooks/UseTransitionHook';
import HeavyComponent from './components/HeavyComponent';
import UseContextHook from './Hooks/UseContextHook';

export default function App() {
  return (
    // <UseStateHook />
    <View style={styles.view}>
      <UseContextHook />
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
