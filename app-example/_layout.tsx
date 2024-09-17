import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "red",
    }}>
      <TouchableOpacity style={{
        paddingVertical: "10px",
        backgroundColor: "white"

      }}>
        <Text>Hello</Text>
      </TouchableOpacity>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout