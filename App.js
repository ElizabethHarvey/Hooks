// import { StatusBar } from 'expo-status-bar';

// import useMemoHook from './hooks/UseMemoHook';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import UseMemoHook from './hooks/UseMemoHook';

export default function App() {
  return UseMemoHook()
}
