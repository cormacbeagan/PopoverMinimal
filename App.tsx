import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import Popover from 'react-native-popover-view/dist/Popover';
enableScreens();
const Stack = createNativeStackNavigator();

const Screen1 = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const onPress = () => {
    setIsVisible(false);
    navigation.navigate('Screen2');
  };
  return (
    <View style={styles.screenView}>
      <Text style={styles.text}>Screen 1</Text>
      <Popover
        isVisible={isVisible}
        debug
        from={<Button title="Popover" onPress={() => setIsVisible(true)} />}>
        <Button title="Screen2" onPress={onPress} />
      </Popover>
    </View>
  );
};

const Screen2 = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const onPress = () => {
    setIsVisible(false);
    navigation.navigate('Screen1');
  };
  return (
    <View style={styles.screenView}>
      <Text style={styles.text}>Screen 2 </Text>
      <Popover
        isVisible={isVisible}
        debug
        from={<Button title="Popover" onPress={() => setIsVisible(true)} />}>
        <Button title="Screen1" onPress={onPress} />
      </Popover>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  screenView: {
    height: '100%',
    width: '100%',
  },
});

export default App;
