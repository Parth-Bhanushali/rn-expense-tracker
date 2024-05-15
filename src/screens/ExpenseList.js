import { Alert, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import FilterSelector from '../components/FilterSelector'
import { dummyExpenseList } from '../constants/dummy'
import Expense from '../components/Expense'
import { colors } from '../constants/theme'
import Separator from '../components/Separator'
import ActionsBSContent from '../components/ActionsBSContent'
import DeleteBSContent from '../components/DeleteBSContent'
import { useDispatch, useSelector } from 'react-redux'
import { setFocusedExpense, removeFocusFromExpense } from '../redux/CommonReducer'
import HeaderExpensesList from '../components/HeaderExpensesList'

var timeout = null

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

const Expenses = ({ onExpenseLongPress, focused }) => {
  return (
    <FlatList 
      keyExtractor={(i, index) => index}
      data={dummyExpenseList}
      renderItem={(props) => <Expense onLongPress={onExpenseLongPress} focused={focused} {...props} />}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingBottom: 8, backgroundColor: colors.white }}
    />
  )
}

const ExpenseList = (props) => {
  const [currentFilter, setCurrentFilter] = React.useState(Filters.ALL)
  const [actionsBSContentMeasuredHeight, setActionsBSContentMeasuredHeight] = React.useState(0)
  const [deleteBSContentMeasuredHeight, setDeleteBSContentMeasuredHeight] = React.useState(0)

  const dispatch = useDispatch()

  const { focusedExpense } = useSelector(state => state.common)

  function handleOnBackPress () {
    Alert.alert("Alert", "Implementation not provided.")
  }

  React.useEffect(() => {
    props.navigation.setOptions({
      header: () => {
        return (
          <View style={{
            backgroundColor: 'white',
            shadowColor: colors.black,
            shadowOpacity: 1,
            shadowRadius: 3,
            elevation: 3
          }}>
            <HeaderExpensesList
              title="Expenses List"
              onBackPress={handleOnBackPress}
              onCancelPress={handleBSCancelPress}
              // showCancel={focusedExpense != null ? true : false}
              showCancel={false}
            />

            <FilterSelector data={Filters} currentFilter={currentFilter} onFilterPress={handleOnFilterPress} />
          </View>
        )
      }
    });
  }, [currentFilter])

  React.useEffect(() => {
    // required to measure layout in advance
    if (typeof props.setBottomSheetContent != 'undefined') {
      props.setBottomSheetLineRequired(true)
      props.setBottomSheetContent(<ActionsBSContent bSContentMeasuredHeight={actionsBSContentMeasuredHeight} setBSContentMeasuredHeight={setActionsBSContentMeasuredHeight} onCancelPress={handleBSCancelPress} />)
    }
  }, [])

  React.useEffect(() => {
    const clear = setTimeout(() => {
      if (typeof props.setBottomSheetContent != 'undefined') {
        props.setBottomSheetLineRequired(true)
        props.setBottomSheetContent(<DeleteBSContent bSContentMeasuredHeight={deleteBSContentMeasuredHeight} setBSContentMeasuredHeight={setDeleteBSContentMeasuredHeight} onCancelPress={handleBSCancelPress} />)
      }
    }, 1000)

    return () => clearTimeout(clear)
  }, [])

  function handleOnFilterPress (selected) {
    setCurrentFilter(selected)
  }

  function handleBSCancelPress() {
    props.bottomSheetRef.current?.close()
    dispatch(removeFocusFromExpense(null))
  }

  function handleActionsBSOptionSelected(selectedOption, item, index) {
    props.bottomSheetRef.current?.close()

    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
    
    handleBSOptionAfterDelay(120, selectedOption, item, index)
  }

  function handleOnDeleteSelected (item, index) {
    props.bottomSheetRef.current?.close()
    dispatch(removeFocusFromExpense(null))
    // TODO
    console.log('Implement delete for: ', index)
  }

  function handleBSOptionAfterDelay(delay, selectedOption, item, index) {
    timeout = setTimeout(() => {
      switch (selectedOption) {
        case "EDIT":
          props.navigation.navigate("EditExpense", {
            item: item,
            index: index
          })
          
          dispatch(removeFocusFromExpense(null))
          break;
        case "DELETE":
          props.setBottomSheetLineRequired(true)
          props.setBottomSheetHeight(deleteBSContentMeasuredHeight.toString())
    
          setTimeout(() => {
            props.setBottomSheetContent(<DeleteBSContent item={item} index={index} bSContentMeasuredHeight={deleteBSContentMeasuredHeight} setBSContentMeasuredHeight={setDeleteBSContentMeasuredHeight} onCancelPress={handleBSCancelPress} onDeleteSelected={handleOnDeleteSelected} />)
            props.bottomSheetRef.current?.expand()
          }, 0);

          break;
      }
    }, delay)
  }

  function handleOnExpenseLongPress (item, index) {
    dispatch(setFocusedExpense(index))
    
    props.setBottomSheetHeight(actionsBSContentMeasuredHeight.toString())
    
    setTimeout(() => {
      props.setBottomSheetLineRequired(false)
      props.setBottomSheetContent(<ActionsBSContent item={item} index={index} bSContentMeasuredHeight={actionsBSContentMeasuredHeight} setBSContentMeasuredHeight={setActionsBSContentMeasuredHeight} onCancelPress={handleBSCancelPress} onOptionSelected={handleActionsBSOptionSelected} />)
      props.bottomSheetRef.current?.expand()
    }, 0);
  }

  return (
    <View style={{ flex: 1 }}>
      <Expenses onExpenseLongPress={handleOnExpenseLongPress} focused={focusedExpense} />
    </View>
  )
}

export default ExpenseList

const styles = StyleSheet.create({})