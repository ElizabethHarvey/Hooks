import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontSizeContext from '../components/context';
import { useState } from 'react';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';

function UseContextHook(props) {
  const [size, setSize] = useState(16);
  return (
    <FontSizeContext.Provider value={size}>
      <View style={{ alignItems: 'center' }}>
        <PageOne />
        <PageTwo />
        <View style={{ flexDirection: 'row', marginTop: 100 }}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => setSize(size + 5)}
          >
            <Text style={{ marginRight: 30, fontSize: 50 }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            disabled={size === 11}
            onPress={() => (setSize(size - 5))}
          >
            <Text style={{ fontSize: 50 }}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FontSizeContext.Provider>
  );
}

export default UseContextHook;

// The React Context API provides
// a way to share states or 
// data throughout the React component
// tree.

// The API makes data sharing between 
// components easy while eliminating 
// prop drilling.

