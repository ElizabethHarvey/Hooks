import React, { useId } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectHook from "./Hooks/UseEffectHook";

export default function App() {
 return (
  <UseStateHook />
  // <UseReducerHook />
 )
}
 
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



