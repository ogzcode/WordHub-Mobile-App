import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useToast } from "../../../components/toast/useToast";

import { useAuth } from '../../../context/authContext'
import { fetchWords } from '../../../store/slice/wordSlice'
import { getRandomWords } from '../../../utils/util'

import Header from './Header'
import TopBox from './TopBox'
import Footer from './Footer'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import Bottombox from './BottomBox'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color["white"],
        paddingHorizontal: size[4],
        gap: size[4],
    }
})

export default function Main() {
    const { words } = useSelector(state => state.word);
    const toast = useToast();
    const { getUser } = useAuth();
    const dispatch = useDispatch();

    const [selectedWord, setSelectedWord] = useState("");
    const [foundWords, setFoundWords] = useState([]);
    const [guess, setGuess] = useState([]);

    useEffect(() => {
        if (words.length === 0) {
            dispatch(fetchWords(getUser()?.id))
        }
        else {
            setSelectedWord(getRandomWords(words, foundWords));
        }
    }, [words]);

    const handleAddLetter = (letter, index) => {
        setGuess((prev) => {
            return [...prev, { letter, index }];
        });
    }

    const deleteLetterFromGuess = () => {
        setGuess(guess.slice(0, -1));
    }

    const guessWordIsCorrect = () => {
        const guessWord = guess.map((item) => item.letter).join('');
        return guessWord === selectedWord && guessWord !== "";
    }

    const handleGuessWord = () => {
        if (guessWordIsCorrect()) {
            toast.showToast("Correct!", "success");
            setFoundWords((prev) => [...prev, selectedWord]);
            setGuess([]);
            setSelectedWord(getRandomWords(words, foundWords));
        }
        else {
            toast.showToast("Wrong!", "error");
        }
    }

    const handleNextWord = () => {
        setGuess([]);
        setSelectedWord(getRandomWords(words, foundWords));
    }

    const getProgressWidth = () => {
        return (foundWords.length / words.length) * 100;
    }

    return (
        <View style={style.container}>
            <Header
                progressWidth={getProgressWidth()}
                wordRate={`${foundWords.length} / ${words.length}`}
                onNextWord={handleNextWord}
            />
            <TopBox wordLength={selectedWord.length} selectedWord={guess} />
            <Bottombox word={selectedWord} guess={guess} onAddLetter={handleAddLetter} />
            <Footer onDeleteLetter={deleteLetterFromGuess} onNextWord={handleGuessWord} />
        </View>
    )
}