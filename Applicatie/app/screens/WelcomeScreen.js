import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hi whatsup</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
     
    },
  });
