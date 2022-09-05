import React, { useState, useTransition } from 'react';
import { TextInput, View } from 'react-native';

export default function HeavyComponent({ names= null }) {
  const [query, setQuery] = useState(['']);
  const [highlight, setHighlight] = useState(['']);
  const [loading, setLoading] = useState(false);

  const [isPending, startTransition] = useTransition();
  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => setHighlight(value));
  };

  setLoading(true);

  
  if (loading) {
    return <Text>Data is loading...</Text>;
  }


  console.log(names)
  return (
    <View>
      <TextInput style={{ borderColor: 'black',borderWidth: 1 }} onChange={changeHandler} value={query} keyboardType="default" />
      {names.map((name, i) => {
        <ListItem key={i} name={name} highlight={highlight} />;
      })}
  {setLoading(false)}
    </View>
  );
}

function ListItem({ name, highlight }) {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <View>{name}</View>;
  }
  return (
    <View>
      <Text>
        {name.slice(0, index)}
        <span className="highlight">
          {name.slice(index, index + highlight.length)}
        </span>
        {name.slice(index + highlight.length)}
      </Text>
    </View>
  );
}
