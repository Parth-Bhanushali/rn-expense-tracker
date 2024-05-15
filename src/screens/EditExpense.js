import { StyleSheet, Text, View, Image } from 'react-native'
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

      <View 
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
        />
      </View>

      {
        errorMessage &&
        <View style={{ marginTop: 6 }}>
          <Text style={{ color: colors.red, fontSize: 12, marginLeft: 4 }}>{errorMessage}</Text>
        </View>
      }
    </View>
  )
}

const AddBillDetailsButton = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Image 
        resizeMode='contain'
        source={add_circle}
      />

      <Text style={{ color: colors.orange, fontSize: 16 }}>Add Bill Details
        <Text> *</Text>
      </Text>
    </View>
  )
}

const Bill = ({ expense }) => {
  return (
    <View 
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
        />
      </View>
    </View>
  )
}

const ButtonSaveChanges = () => {
  return (
    <View style={{ backgroundColor: colors.orange, borderRadius: 50, paddingHorizontal: 16, paddingVertical: 16, alignItems: 'center' }}>
      <Text style={{ color: colors.white, includeFontPadding: false, fontWeight: '600' }}>Save Changes</Text>
    </View>
  )
}

const EditExpense = (props) => {
  const { index, item } = props.route.params

  React.useEffect(() => {
    props.navigation.setOptions({
      header: () => <HeaderEditExpense title="Edit Expense Request" onBackPress={() => props.navigation.goBack()} />,
    });
  }, []);
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.white, paddingHorizontal: 16 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingTop: 16, paddingBottom: 36 }}>
        <InputField 
          title="Project Name" 
          text={item.project_name} 
          isMandatory 
          icon={arrow_drop_down} 
          onPress={() => {}}
          errorMessage={"Error message goes here"}
        />
        
        <View style={{ marginVertical: 8 }} />

        <InputField 
          title="Project Site" 
          text={item.project_site} 
          isMandatory 
          icon={arrow_drop_down} 
          onPress={() => {}} 
        />
        
        <View style={{ marginVertical: 8 }} />

        <InputField 
          title="Date" 
          text={convertMillisToDateText(item.date)} 
          isMandatory 
          icon={calender_month} 
          onPress={() => {}} 
        />

        <View style={{ marginVertical: 16 }} />

        <AddBillDetailsButton />

        <View style={{ marginVertical: 8 }} />

        {/* Bills */}
        <View style={{ gap: 12 }}>      
          {
            item.expenses.map((exp, index) => {
              return <Bill key={index + ":" + exp.date} expense={exp} index={index} />
            })
          }
        </View>

      </ScrollView>

      <View style={{ paddingVertical: 16 }}>
        <ButtonSaveChanges />
      </View>
    </View>
  )
}

export default EditExpense

const styles = StyleSheet.create({})