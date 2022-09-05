import { useContext } from 'react';
import { Text } from 'react-native';
import context from './context';

const PageOne = () => {
  const size = useContext(context);
  return (
    <Text style={{ fontSize: size }}>
      Content from the Second page
    </Text>
  );
};
export default PageOne;
