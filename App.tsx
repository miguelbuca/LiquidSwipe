import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ISlides } from './@types'

import LiquidSwipe from './components/liquidSwipe'

export default function App() {

  const slides: ISlides[] = [
    {
      color: '#0090D6',
      title: 'test 1',
      descripction: 'ola mundo 1',
      picture: 'favicon.png'
    },
    {
      color: '#FB3A4D',
      title: 'test 2',
      descripction: 'ola mundo 2',
      picture: 'favicon.png'
    },
    {
      color: 'red',
      title: 'test 3',
      descripction: 'ola mundo 3',
      picture: 'favicon.png'
    },
    {
      color: '#00140D6',
      title: 'test 4',
      descripction: 'ola mundo 4',
      picture: 'favicon.png'
    },
    {
      color: '#FB104D',
      title: 'test 5',
      descripction: 'ola mundo 5',
      picture: 'favicon.png'
    },
    {
      color: 'red',
      title: 'test 3',
      descripction: 'ola mundo 3',
      picture: 'favicon.png'
    }
  ]

  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <LiquidSwipe slides={slides} />
    </View>
  );
}