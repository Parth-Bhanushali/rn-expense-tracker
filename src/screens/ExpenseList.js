import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FilterSelector from '../components/FilterSelector'
import { dummyExpenseList } from '../constants/dummy'
import Expense from '../components/Expense'
import { colors } from '../constants/theme'
import Separator from '../components/Separator'

const Filters = {
  ALL: "All",
  TODAY: "Today",
  THIS_WEEK: "This Week",
  LAST_WEEK: "Last Week",
  THIS_MONTH: "This Month",
  LAST_MONTH: "Last Month",
  THIS_QUARTER: "This Quarter",
  THIS_FY: "This FY",
  LAST_FY: "Last FY",
  CUSTOM: "Custom"
}

const Expenses = ({ onExpenseLongPress }) => {
  return (
    <FlatList 
      keyExtractor={(i, index) => index}
      data={dummyExpenseList}
      renderItem={(props) => <Expense onLongPress={onExpenseLongPress} {...props} />}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingBottom: 8, backgroundColor: colors.white }}
    />
  )
}

const ExpenseList = () => {
  const [currentFilter, setCurrentFilter] = React.useState(Filters.ALL)

  function handleOnFilterPress (selected) {
    setCurrentFilter(selected)
  }

  function handleOnExpenseLongPress (item, index) {
    console.log('long press happened: ' + index)
  }

  return (
    <View style={{ flex: 1 }}>
      <FilterSelector data={Filters} currentFilter={currentFilter} onFilterPress={handleOnFilterPress} />
    
      <Expenses onExpenseLongPress={handleOnExpenseLongPress} />
    </View>
  )
}

export default ExpenseList

const styles = StyleSheet.create({})