import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import SearchResult from '../components/SearchResult';

export default function UseDeferredValueHook() {
  const [query, setQuery] = useState('');
  

  console.log(query)
  return (
    <View style={{ flex: 0.75}}>
      <View style={{flexDirection: 'row'}}>
        <Text>Search: </Text>
        <TextInput
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter search value..."
        />
      </View>
      <Text>
        {query}
      </Text>
    </View>
  );
}

{/* <SearchResult query={query} /> */}