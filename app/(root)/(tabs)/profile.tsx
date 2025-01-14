import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (<>
    <Tabs>
      <Tabs.Screen name='/' options={{ title: 'Explore' }}/>
    </Tabs>
    <View>
      <Text>Profile Screen</Text>
    </View>
  </>
  );
}
