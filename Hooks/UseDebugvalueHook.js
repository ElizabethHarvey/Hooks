import React, { useDebugValue, useState } from "react"
import { Text, View } from 'react-native';

export default function UseDebugValueHook() {
  const [b, setB] = useState(true);

  useDebugValue(b ? console.log("Rocket is Active") : console.log("Rocket is Inactive"))
  console.log(b)
  return <View style={{alignItems: "center"}}>
    <Text>{b}</Text>
  </View>
}
