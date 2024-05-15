import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Watermark = ({ isAbsolute }) => {
  return (
    <View style={{ position: isAbsolute && 'absolute', bottom: isAbsolute && 24, width: '100%' }}>
      <Text style={{ fontSize: 16, opacity: 0.8, color: 'gray', textAlign: 'center' }}>Assignment by Parth Bhanushali</Text>
    </View>
  )
}

export default Watermark

const styles = StyleSheet.create({})