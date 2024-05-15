import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { colors } from '../constants/theme'
import Chip from '../components/Chip'

const FilterSelector = ({ data, currentFilter, onFilterPress }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        minHeight: 56,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flexDirection: 'row', paddingHorizontal: 16, alignItems: 'center', gap: 10 }}>
          {
            Object.values(data).map((e, index) => {
              return <Chip key={index} text={e} isSelected={e == currentFilter} onPress={() => onFilterPress(e)} />
            })
          }
        </View>
      </ScrollView>

      {/* <View style={{ width: '100%', height: 1, marginTop: 8, backgroundColor: 'lightgray' }}>

      </View> */}
    </View>
  )
}

export default FilterSelector

const styles = StyleSheet.create({})