import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const signin = () => {
  return (
    <>
    <Tabs>
<Tabs.Screen name='/' options={{ title: 'Explore' }}>

</Tabs.Screen>
    </Tabs>
    <View>
      <Text>HELOOOO</Text>
    </View>
    </>
  )
}

export default signin

const styles = StyleSheet.create({})