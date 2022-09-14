import React, { useId } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectHook from './Hooks/UseEffectHook';
import UseReducerHook from './Hooks/UseReducerHook';
import UseTransitionHook from './Hooks/UseTransitionHook';
import HeavyComponent from './components/HeavyComponent';
import UseContextHook from './Hooks/UseContextHook';
import UseCallbackHook from './Hooks/UseCallbackHook';
import UseRefHook from './Hooks/UseRefHook';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import UseMemoHook from './Hooks/UseMemoHook';
import UseDebugValueHook from './Hooks/UseDebugvalueHook';
import UseDeferredValueHook from './Hooks/UseDeferredValueHook';


export default function App() {
  return (
    // <UseStateHook />
    <View style={styles.view}>
      <UseDeferredValueHook />
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
