import React, { useId } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseIdHook from './Hooks/UseIdHook';
import UseMemoHook from './Hooks/UseMemoHook';

function App() {
  return <UseMemoHook/>
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
