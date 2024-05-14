import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ExpenseList from '../screens/ExpenseList'
import EditExpense from '../screens/EditExpense'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="ExpenseList" component={ExpenseList} />
          <Stack.Screen name="EditExpense" component={EditExpense} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default AppNavigator