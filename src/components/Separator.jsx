import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme'

const Separator = () => {
  return (
    <View style={{ height: 1, width: "100%", backgroundColor: colors.separatorLine }} />
  )
}

export default Separator

const styles = StyleSheet.create({})