import { useDeferredValue, useMemo } from 'react';
import { Text, View } from 'react-native';

const SearchResult = ({ query }) => {
  const deferredQuery = useDeferredValue(query); // hook usage

 console.log(deferredQuery)
  return useMemo(() => {
    const result = [];
    for (let i = 0; i < 100; i++) {
      result.push(
        <View key={i}>
          <Text>{deferredQuery}</Text>
        </View>
      );
    }
    return result;
  }, [deferredQuery]);
};
export default SearchResult;
