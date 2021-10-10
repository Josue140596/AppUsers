import React from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
//Paper
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
