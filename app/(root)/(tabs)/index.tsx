import { View } from 'react-native'
import React from 'react'
import { Link, Tabs } from 'expo-router'

export default function Index() {
    return (
        <>
            <Tabs>
                <Tabs.Screen name='(root)' options={{ title: 'Explore' }} />
            </Tabs>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }} >
                <Link href='/sign-in'>Sign In</Link>
                <Link href='/profile'>Profile</Link>
                <Link href='/'>Indexxxxxxxx</Link>
            </View>
        </>
    )
}

