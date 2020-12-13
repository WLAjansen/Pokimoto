import React from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      
    },
    titleText: {
        color: '#fff',
        fontSize: 20,
    },
  });