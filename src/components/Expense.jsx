import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme'
import Chip from './Chip'
import { Status } from '../constants/dummy'

const Expense = (props) => {
  const { index, item, onLongPress, focused } = props
  const dateObj = new Date(item.date)
  
  let date = String(dateObj.getDate())
  let month = String(dateObj.getMonth() + 1)
  let year = String(dateObj.getFullYear())

  date = date.padStart(2, "0")
  month = month.padStart(2, "0")

  const dateText = date + "/" + month + "/" + year

  const status = item.status
  const statusChipBackgroundColor = status == Status.PENDING 
                                      ? colors.lightgray
                                    : status == Status.APPROVED
                                      ? colors.lightgreen
                                    : status == Status.REJECTED
                                      && colors.lightred

  const statusChipTextColor = status == Status.PENDING 
                                      ? colors.darkgray 
                                    : status == Status.APPROVED
                                      ? colors.green
                                    : status == Status.REJECTED
                                      && colors.red

  let total = 0;

  for (let i=0; i < item.expenses.length; i++) {
    total += item.expenses[i].amount
  }
                                      
  return (
    <TouchableOpacity
      onPress={() => onLongPress(item, index)}
      onLongPress={() => onLongPress(item, index)}
      activeOpacity={1}
      style={{ 
        flex: 1, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: index == focused ? colors.ultralightgreen : colors.white 
      }}
    >
      
      {/* first row */}
      <View style={{ flex: 1, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', columnGap: 12, rowGap: 2, flexWrap: 'wrap' }}>
          <Text style={{ color: colors.orange, fontWeight: '600' }}>{item.project_name}</Text>
          <Text style={{ }}>{item.project_site}</Text>
        </View>

        <View style={{ marginLeft: 8 }}>
          <Chip 
            text={dateText} 
            backgroundColor={colors.blue} 
            textColor={colors.textNormal} 
            fontSize={12} 
          />
        </View>
      </View>

      {/* second row */}
      <View style={{ marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <View style={{ paddingHorizontal: 12, paddingBottom: 10, paddingTop: 6, backgroundColor: "#FBE7D8", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ paddingBottom: 2, borderBottomWidth: 1, borderColor: colors.orange }}>
              <Text style={{ color: colors.orange, fontSize: 12 }}>View Bills</Text>
            </View>
          </View>
        </View>

        <View style={{ marginLeft: 8 }}>
          <Chip
            text={status}
            backgroundColor={statusChipBackgroundColor}
            textColor={statusChipTextColor}
            fontSize={12}
            bold
          />
        </View>
      </View>

      {/* third row is reserved for rejection reason */}
      {
        status == Status.REJECTED &&
        <View style={{ marginBottom: 8 }}>
          <Text>
            <Text style={{ color: colors.red, fontWeight: '600' }}>Rejection Reason : </Text>
            <Text style={{ color: colors.textNormal }}>Lorem ipsum is simply dummy text of the printing and typesetting industry and has been the industry's standard.</Text>
          </Text>
        </View>
      }

      {/* fourth row */}
      <View style={{ gap: 4 }}>
        {
          item.expenses?.map((exp, index) => {
            return (
              <View 
                key={index}
                style={{ 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}
              >
                <Text style={{ color: colors.textNormal }}>{exp.paid_for}</Text>
                <Text style={{ color: colors.textNormal }}>₹ {exp.amount}</Text>
              </View>
            )
          })
        }
        
        <View style={{ gap: 2 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: colors.textNormal, fontWeight: '600' }}>Total</Text>
            <Text style={{ color: colors.textNormal, fontWeight: '600' }}>₹ {total}</Text>
          </View>

          {
            status == Status.APPROVED &&
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: colors.textNormal, fontWeight: '600' }}>Approved</Text>
              <Text style={{ color: colors.textNormal, fontWeight: '600' }}>₹ {total * 80 / 100}</Text>
            </View>
          }
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default Expense

const styles = StyleSheet.create({})