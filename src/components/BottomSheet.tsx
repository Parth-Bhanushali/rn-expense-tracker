import { StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import React, { ReactNode, forwardRef, useCallback, useImperativeHandle } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import BackDrop from './BackDrop'
import { colors } from '../constants/theme'

type Props = {
    snapTo: string;
    backgroundColor: string;
    backDropColor: string;
    lineRequired: boolean;
    children?: ReactNode;
}

export interface BottomSheetMethods {
    expand: () => void;
    close: () => void;
}

const BottomSheet = forwardRef<BottomSheetMethods, Props>(({snapTo, backgroundColor, lineRequired, backDropColor, children}: Props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const {height} = Dimensions.get('window')
  const closeHeight = height
  var openHeight = 0
  if (snapTo.includes("%")) {
      const percentage = Math.min(parseFloat(snapTo.replace('%', '')), 80) / 100    // max 80%
      openHeight = height - height * percentage
  }
  else {
    openHeight = height - Math.min(Number(snapTo), height * 0.8)                    // max 80%
  }  
  const topAnimation = useSharedValue(closeHeight)

  const configExpand = {  // To control the length of the animation
    duration: 200,
  };

  const configClose = {  // To control the length of the animation
    duration: 100,
  };

  const expand = useCallback(() => {
    'worklet';
    topAnimation.value = withTiming(openHeight, configExpand)
    setIsOpen(true)
  }, [openHeight, topAnimation])
  
  const close = useCallback(() => {
    'worklet';
    topAnimation.value = withTiming(closeHeight, configClose)
    setIsOpen(false)
  }, [closeHeight, topAnimation])

  useImperativeHandle(
    ref,
    () => ({
        expand, close
    }),
    [expand, close]
  )

  const animationStyle  = useAnimatedStyle(() => {
    const top = topAnimation.value
    return {
        top
    }
  })

  return (
        <>
            <StatusBar backgroundColor={isOpen ? 'gray' : colors.white} barStyle={'dark-content'} />

            <BackDrop
                topAnimation={topAnimation}
                closeHeight={closeHeight}
                openHeight={openHeight}
                close={close}
                backDropColor={backDropColor}
            />
            <Animated.View style={[styles.container, animationStyle, {
                backgroundColor: backgroundColor
            }]}>
                {
                    lineRequired &&
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                    </View>
                }
                {children}
            </Animated.View>
        </>
    )
}
)

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    lineContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    line: {
        width: 50, height: 4,
        backgroundColor: '#C6C6C6',
        borderRadius: 20
    }
})