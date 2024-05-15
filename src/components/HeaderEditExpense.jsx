import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import arrow_left from "../assets/arrow_left.png"
import { colors } from '../constants/theme'

const HeaderLeft = ({ onBackPress }) => {
  return (
    <TouchableOpacity
      onPress={onBackPress}
      activeOpacity={0.8}
      style={{ paddingLeft: 16, paddingRight: 8 }}
    >
      {/* <Text>Back</Text> */}
      <Image
        resizeMode='contain'
        source={arrow_left}
        style={{ width: 24, height: 24, tintColor: colors.black }}
      />
    </TouchableOpacity>
  )
}

const HeaderEditExpense = ({ title, onBackPress }) => {
  return (
    <View style={{ height: 56, backgroundColor: colors.white, flexDirection: "row" }}>
      <View style={{ position: "absolute", left: 0, height: "100%", justifyContent: "center" }}>
        <HeaderLeft onBackPress={onBackPress} />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
      </View>
    </View>
  )
}

export default HeaderEditExpense

const styles = StyleSheet.create({})