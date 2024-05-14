import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme'

const Chip = ({ text, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: isSelected ? colors.green : colors.lightgray, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 16
      }}
    >
      <Text style={{ fontSize: 14, includeFontPadding: false, color: isSelected ? colors.white : colors.black }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Chip

const styles = StyleSheet.create({})