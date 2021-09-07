import React from 'react'
import { StyleSheet, View } from 'react-native';

import { TapGestureHandler } from 'react-native-gesture-handler'

import Animated from 'react-native-reanimated'

import Wave, { HEIGHT, MARGIN_WIDTH, WIDTH } from '../wave';

import { SliderProps, Side } from '../../@types';

const PREV = WIDTH
const NEXT = 0

const Slider = ({
    index,
    children : current,
    prev,
    next,
    setIndex
}: SliderProps) => {

    const hasPrev = !!prev
    const hasNext = !!next

    return (
        <TapGestureHandler>
            <Animated.View style={StyleSheet.absoluteFill}>
            {current}
            {
                prev && (
                    <View style={StyleSheet.absoluteFill}>
                        <Wave side={Side.LEFT}>{ prev }</Wave>
                    </View>
                )
            }
            {
                next && (
                    <View style={[StyleSheet.absoluteFill]}>
                        <Wave side={Side.RIGHT}>{ prev }</Wave>
                    </View>
                )
            }
        </Animated.View>
        </TapGestureHandler>
        )
}

export default Slider
