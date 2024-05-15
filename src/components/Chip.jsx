import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme'

const Chip = ({ 
  text, onPress, isSelected,
  backgroundColor, textColor, fontSize, bold
}) => {
  return (
    <TouchableOpacity
      activeOpacity={!!onPress ? 0.7 : 1}
      onPress={onPress}
      style={{
        backgroundColor: 
          !backgroundColor ?
            isSelected ? colors.green : colors.lightgray
          : backgroundColor, 
        paddingVertical: 8, paddingHorizontal: 12, 
        borderRadius: 16
      }}
    >
      <Text 
        style={{ 
          color: 
            !textColor 
              ? isSelected ? colors.white : colors.black 
            : textColor,
          fontSize: !fontSize ? 14 : fontSize, 
          includeFontPadding: false,
          fontWeight: bold && '600'
        }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Chip

const styles = StyleSheet.create({})