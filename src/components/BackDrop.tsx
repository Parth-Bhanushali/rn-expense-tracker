import { StyleSheet, TouchableWithoutFeedback, } from 'react-native'
import React from 'react'
import Animated, { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDispatch } from 'react-redux'
import { removeFocusFromExpense } from '../redux/CommonReducer'

type Props = {
    topAnimation: SharedValue<number>;
    openHeight: number;
    closeHeight: number;
    close: () => void;
    backDropColor: string;
}

const BackDrop = ({ topAnimation, openHeight, closeHeight, close, backDropColor }: Props) => {
    const dispatch = useDispatch()
    function onClosed() {
      dispatch(removeFocusFromExpense(null))
    }

    const backdropAnimation = useAnimatedStyle(() => {
        const opacity = interpolate(
            topAnimation.value,
            [closeHeight, openHeight],
            [0, 0.5]
        )

        const display = opacity === 0 ? 'none' : 'flex'

        return {
            opacity,
            display,
        }
    })

    return (
        <TouchableWithoutFeedback onPress={() => {
            close()
            onClosed()
        }}>
            <Animated.View style={[styles.container, backdropAnimation, {
                backgroundColor: backDropColor
            }]}>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default BackDrop

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        display: 'none',
    }
})