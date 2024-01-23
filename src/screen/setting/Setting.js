import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import UpdateAccont from './components/UpdateAccont';
import About from './components/About';

import { size } from '../../style/size';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: size["4"]
    }
})

export default function Setting() {
    return (
        <ScrollView style={style.container}>
            <UpdateAccont />
            <About />
        </ScrollView>
    )
}