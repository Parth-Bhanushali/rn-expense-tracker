import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme'

const DeleteBSContent = ({ item, index, bSContentMeasuredHeight, setBSContentMeasuredHeight, onCancelPress, onDeleteSelected }) => {
  return (
    <View
      onLayout={evt => {
        height = evt.nativeEvent.layout.height + (PixelRatio.get() * evt.nativeEvent.layout.y)
        if (bSContentMeasuredHeight == 0) {
          // console.log('set delete bs height to: ' + height)
          setBSContentMeasuredHeight(height)
        }
      }}
      style={{
        height: 220,
        paddingHorizontal: 16, gap: 8,
      }}
    >
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <Text style={{ fontWeight: '500', color: colors.textNormal, fontSize: 24 }}>Are you sure?</Text>
          <Text style={{ color: colors.textSecondary, fontSize: 16, textAlign: 'center' }}>You want to delete this expense request.</Text>
        </View>
      </View>

      <View style={{ paddingTop: 20, paddingBottom: 4, gap: 16, flex: 1 }}>
        <View>
          <TouchableOpacity
            onPress={() => onDeleteSelected(item, index)}
            activeOpacity={0.65}
            style={{
              backgroundColor: colors.lightred, justifyContent: 'center', alignItems: 'center',
              paddingVertical: 12, borderRadius: 50
            }}
          >
            <Text style={{ color: colors.red, fontWeight: '600' }}>Delete</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => onCancelPress()}
            activeOpacity={0.65}
            style={{
              backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center',
              paddingVertical: 12, borderRadius: 50,
              borderWidth: 1, borderColor: colors.textSecondary
            }}
          >
            <Text style={{ color: colors.darkgray, fontWeight: '600' }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DeleteBSContent

const styles = StyleSheet.create({})