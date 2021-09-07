import React from 'react'
import { View,Image, Text } from 'react-native'

import { SlideProps } from '../../@types'

const Slide = ({ slide: { color, title, descripction ,picture } }: SlideProps) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: color,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <View style={{
                flex: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image width={100} source={require('../../assets/favicon.png')}/>
            </View>
            <View style={{
                flex: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <View style={{
                    flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 46,
                        color: '#fff'
                    }}>{title}</Text>
                </View>
                <View style={{
                    flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                <Text style={{
                        fontSize: 14,
                    color: '#fff'
                }}>{ descripction }</Text>
               </View>
            </View>
        </View>
    )
}

export default Slide