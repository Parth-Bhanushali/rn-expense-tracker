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
import BottomSheet from '../components/BottomSheet'

const AppNavigator = () => {
  const Stack = createStackNavigator()
  
  const bottomSheetRef = React.useRef(null)
  const [bottomSheetContent, setBottomSheetContent] = React.useState(null);
  const [bottomSheetHeight, setBottomSheetHeight] = React.useState('0')
  const [bottomSheetLineRequired, setBottomSheetLineRequired] = React.useState(true)

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="ExpenseList" 
            options={{ header: () => <HeaderExpensesList /> }} 
          >
            {(props) => <ExpenseList {...props} bottomSheetRef={bottomSheetRef} 
              setBottomSheetHeight={(height) => {
                setBottomSheetHeight(height)
              }}
              setBottomSheetContent={(content) => {
                setBottomSheetContent(content);
              }}
              setBottomSheetLineRequired={(required) => {
                setBottomSheetLineRequired(required);
              }}
            />}
          </Stack.Screen>
          
          <Stack.Screen name="EditExpense" component={EditExpense} />
        </Stack.Navigator>

        <BottomSheet ref={bottomSheetRef} snapTo={bottomSheetHeight} lineRequired={bottomSheetLineRequired} backgroundColor='white' backDropColor='black'>
          {bottomSheetContent}
        </BottomSheet>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default AppNavigator