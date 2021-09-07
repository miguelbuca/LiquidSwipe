import React from 'react'
import { StyleSheet,Text, Dimensions } from 'react-native'

import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedProps } from 'react-native-reanimated'

import { WaveProps } from '../../@types'

export const HEIGHT: number = Dimensions.get('screen').height;
export const MARGIN_WIDTH: number = 40;
export const WIDTH: number = Dimensions.get('screen').width;

const AnimatedPath = Animated.createAnimatedComponent(Path)

const Wave = ({ side , children }: WaveProps) => {

    const animatedProps = useAnimatedProps(() => {
        const d = ["M 0 0", `H ${ WIDTH/2 }`, `V ${ HEIGHT }`, "H 0", "Z"]
        return {
            d: d.join(" ")
        }
    })

    console.log(JSON.stringify(animatedProps))

    return (
        <MaskedView
            style={StyleSheet.absoluteFill}
            maskElement={
                <Svg style={StyleSheet.absoluteFill}>
                    <AnimatedPath animatedProps={animatedProps} fill="black"  />
                </Svg>
            }
        >
            {children}
        </MaskedView>
    )
}

export default Wave