import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderEditExpense from '../components/HeaderEditExpense'

const EditExpense = (props) => {
  const { index, item } = props.route.params

  React.useEffect(() => {
    props.navigation.setOptions({
      header: () => <HeaderEditExpense title="Edit Expense Request" onBackPress={() => props.navigation.goBack()} />,
    });
  }, []);
  
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