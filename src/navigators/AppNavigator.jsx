import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ExpenseList from '../screens/ExpenseList'
import EditExpense from '../screens/EditExpense'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HeaderExpensesList from '../components/HeaderExpensesList'
import { colors } from '../constants/theme'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="ExpenseList" component={ExpenseList} options={{ header: () => <HeaderExpensesList /> }} />
          <Stack.Screen name="EditExpense" component={EditExpense} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default AppNavigator