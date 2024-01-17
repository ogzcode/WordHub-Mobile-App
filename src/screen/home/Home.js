import React, { useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SearchHeader } from './components/SearchHeader';
import HomeDefault from './components/HomeDefault';
import { searchWordFromAPI } from '../../services/word';
import WordDetails from './components/WordDetails';
import { color } from '../../style/color';


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color["backgroundLight"][0]
    }
})

export default function Home() {
    const [word, setWord] = React.useState(null);

    const handleSearchWord = async (word) => {
        const response = await searchWordFromAPI(word);
        const result = await response.json();
        setWord(result[0]);
    }

    return (
        <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SearchHeader onSearch={handleSearchWord} />
            {
                word ? <WordDetails word={word} /> : <HomeDefault />
            }
        </KeyboardAvoidingView>
    )
}