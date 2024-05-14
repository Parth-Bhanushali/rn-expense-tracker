import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FilterSelector from '../components/FilterSelector'

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

const ExpenseList = () => {
  const [currentFilter, setCurrentFilter] = React.useState(Filters.ALL)

  function handleOnFilterPress (selected) {
    setCurrentFilter(selected)
  }

  return (
    <View>
      <FilterSelector data={Filters} currentFilter={currentFilter} onFilterPress={handleOnFilterPress} />
    </View>
  )
}

export default ExpenseList

const styles = StyleSheet.create({})