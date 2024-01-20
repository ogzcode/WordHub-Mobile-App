import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { useIsFocused } from '@react-navigation/native';


import StartScreen from './components/StartScreen';
import Main from './components/Main';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default function Game() {
    const [isStartGame, setIsStartGame] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setIsStartGame(false);
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            {
                isStartGame ? <Main /> : <StartScreen onStartGame={() => setIsStartGame(true)} />
            }
        </View>
    )
}