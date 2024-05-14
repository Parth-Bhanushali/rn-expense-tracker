import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditExpense = (props) => {
  const { index, item } = props.route.params

  return (
    <View>
      <Text>{item.project_name}</Text>
      <Text>{item.project_site}</Text>
      <Text>{item.date}</Text>
    </View>
  )
}

export default EditExpense

const styles = StyleSheet.create({})