import { Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import editIcon from '../assets/edit.png'
import deleteIcon from '../assets/delete.png'
import { colors } from '../constants/theme'

const ActionsBSContent = ({ item, index, bSContentMeasuredHeight, setBSContentMeasuredHeight, onOptionSelected }) => {
  const OPTIONS = {
    edit: "EDIT",
    delete: "DELETE"
  }

  return (
    <View
      onLayout={evt => {
        height = evt.nativeEvent.layout.height + (PixelRatio.get() * evt.nativeEvent.layout.y)
        if (bSContentMeasuredHeight == 0) {
          // console.log('set actions bs height to: ' + height)
          setBSContentMeasuredHeight(height)
        }
      }}
      style={{
        height: 100, backgroundColor: colors.white, flex: 1, paddingVertical: 25,
        paddingHorizontal: 16, gap: 8,
      }}
    >

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 4, paddingHorizontal: 16, gap: 8, flex: 1 }}>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => onOptionSelected(OPTIONS.edit, item, index)}
            activeOpacity={0.65}
            style={{ backgroundColor: colors.orange, padding: 16, borderRadius: 50 }}
          >
            <Image
              resizeMode='contain'
              source={editIcon}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => onOptionSelected(OPTIONS.delete, item, index)}
            activeOpacity={0.65}
            style={{ backgroundColor: colors.red, padding: 16, borderRadius: 50 }}
          >
            <Image
              resizeMode='contain'
              source={deleteIcon}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionsBSContent

const styles = StyleSheet.create({})