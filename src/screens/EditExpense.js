import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderEditExpense from '../components/HeaderEditExpense'
import { colors } from '../constants/theme'
import arrow_drop_down from '../assets/arrow_drop_down.png'
import calender_month from '../assets/calendar_month.png'
import add_circle from '../assets/add_circle.png'
import cancel from '../assets/cancel.png'
import receipt_long from '../assets/receipt_long.png'

import { convertMillisToDateText } from '../utils/HelperUtils'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { updateExpense } from '../redux/CommonReducer'
import Snackbar from 'react-native-snackbar';
import Watermark from '../components/Watermark'

const InputField = ({ title, text, isMandatory, icon, onPress, errorMessage }) => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.textNormal }}>{title}
        {
          isMandatory &&
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.red }}> *</Text>
        }
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.75} 
        onPress={onPress}
        style={{ 
          marginTop: 10, paddingVertical: 12, paddingHorizontal: 16, 
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          backgroundColor: colors.lightgray,
          borderRadius: 10 
        }}
      >
        <Text>{text}</Text>

        <Image 
          resizeMode='contain'
          source={icon}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      {
        errorMessage &&
        <View style={{ marginTop: 6 }}>
          <Text style={{ color: colors.red, fontSize: 12, marginLeft: 4 }}>{errorMessage}</Text>
        </View>
      }
    </View>
  )
}

const AddBillDetailsButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{ 
        flexDirection: 'row', alignItems: 'center', gap: 8 
      }}
    >
      <Image 
        resizeMode='contain'
        source={add_circle}
        style={{ width: 24, height: 24 }}
      />

      <Text style={{ color: colors.orange, fontSize: 16 }}>Add Bill Details
        <Text> *</Text>
      </Text>
    </TouchableOpacity>
  )
}

const Bill = ({ expense, index, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => onPress(expense, index)} 
      style={{ 
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,
        borderWidth: 1, borderColor: colors.separatorLine, borderRadius: 10,
        paddingHorizontal: 12, paddingVertical: 10
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12  }}>
        <View 
          style={{ 
            padding: 8, backgroundColor: colors.lightgreen,
            borderRadius: 50
          }}
        >
          <Image 
            resizeMode='contain'
            source={receipt_long}
            style={{ width: 24, height: 24 }}
          />
        </View>

        <View>
          <Text style={{ fontWeight: '600', color: colors.textNormal }}>{expense.paid_for}<Text>  </Text>₹{expense.amount}</Text>
          <Text style={{ fontSize: 12, color: colors.darkgray }}>Bill no - {expense.bill_number}</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image 
          resizeMode='contain'
          source={cancel}
          style={{ width: 24, height: 24 }}
        />
      </View>
    </TouchableOpacity>
  )
}

const ButtonSaveChanges = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75} 
      style={{ 
        backgroundColor: colors.orange, 
        borderRadius: 50, 
        paddingHorizontal: 16, paddingVertical: 16, 
        alignItems: 'center' 
      }}
    >
      <Text style={{ color: colors.white, includeFontPadding: false, fontWeight: '600' }}>Save Changes</Text>
    </TouchableOpacity>
  )
}

const EditExpense = (props) => {
  const { index, item } = props.route.params
  const [billExpenses, setBillExpenses] = React.useState(item.expenses)
  const dispatch = useDispatch()

  React.useEffect(() => {
    props.navigation.setOptions({
      header: () => <HeaderEditExpense title="Edit Expense Request" onBackPress={() => props.navigation.goBack()} />,
    });
  }, []);

  function handleAddBillDetailsPress () {
    Alert.alert("Add Bill Details", "Implementation not provided.\n\nWe can show a dialog with input fields to facilitate adding details for the expense.")
  }
  
  function handleProjectNameDDPress () {
    Alert.alert("Select Project Name", "Implementation not provided.\n\nIn live project, a dropdown would be displayed here.")
  }
  
  function handleProjectSiteDDPress () {
    Alert.alert("Select Project Site", "Implementation not provided.\n\nIn live project, a dropdown would be displayed here.")
  }
  
  function handleDatePickerPress () {
    Alert.alert("Select Date", "Implementation not provided.\n\nWe can display calender picker here.")
  }

  function handleOnSaveChangesPress () {
    const modifiedExpense = {...item, expenses: billExpenses}
    
    dispatch(updateExpense({ index: index, modifiedExpense: modifiedExpense }))

    props.navigation.goBack()

    setTimeout(() => {
      Snackbar.show({
        text: 'Updated ' + item.project_name + ', ' + item.project_site,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.green,
        textColor: colors.white
      });
    }, 250)
  } 

  function handleOnBillExpensePress (expense, i) {
    if (billExpenses.length == 1) {
      Alert.alert("Can't remove", "For this assignment, you are required to keep atleast one expense.")
      return
    }
    setBillExpenses(prev => [...prev.filter((val, iIndex) => iIndex != i)])
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.white, paddingHorizontal: 16 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingTop: 16, paddingBottom: 36 }}>
        <InputField 
          title="Project Name" 
          text={item.project_name} 
          isMandatory 
          icon={arrow_drop_down} 
          onPress={handleProjectNameDDPress}
          errorMessage={"Error message goes here"}
        />
        
        <View style={{ marginVertical: 8 }} />

        <InputField 
          title="Project Site" 
          text={item.project_site} 
          isMandatory 
          icon={arrow_drop_down} 
          onPress={handleProjectSiteDDPress} 
        />
        
        <View style={{ marginVertical: 8 }} />

        <InputField 
          title="Date" 
          text={convertMillisToDateText(item.date)} 
          isMandatory 
          icon={calender_month} 
          onPress={handleDatePickerPress} 
        />

        <View style={{ marginVertical: 16 }} />

        <AddBillDetailsButton onPress={handleAddBillDetailsPress} />

        <View style={{ marginVertical: 8 }} />

        {/* Bills */}
        <View style={{ gap: 12 }}>      
          {
            billExpenses.map((exp, i) => {
              return <Bill key={i + ":" + exp.date} expense={exp} index={i} onPress={handleOnBillExpensePress} />
            })
          }
        </View>

        <View style={{ marginVertical: 24 }} />

        <Watermark />

      </ScrollView>

      <View style={{ paddingVertical: 16 }}>
        <ButtonSaveChanges onPress={handleOnSaveChangesPress} />
      </View>
    </View>
  )
}

export default EditExpense

const styles = StyleSheet.create({})