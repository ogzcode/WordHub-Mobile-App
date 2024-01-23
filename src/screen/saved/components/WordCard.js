import React, { useRef } from 'react'
import { View, Text, StyleSheet, Pressable, Animated, Alert } from 'react-native'
import { useDispatch } from 'react-redux'

import { deleteWord, updateSentences } from '../../../store/slice/wordSlice'
import useAudio from '../../../hooks/useAudio'

import { VolumeUp } from '../../../assets/icons/VolumeUp'
import { BookmarkFill } from '../../../assets/icons/BookmarkFill';
import { PlusLarge } from '../../../assets/icons/PlusLarge'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'

import { Tabs } from './Tabs'
import SentencesList from './SentencesList'
import { DefinitionSide } from '../../home/components/DefinitionSide'
import Dialog from '../../../components/Dialog'
import CardHeader from './CardHeader'
import CustomAlert from '../../../components/CustomAlert'

const style = StyleSheet.create({
    container: {
        zIndex: 10,
        backgroundColor: color["white"],
        marginHorizontal: size[6],
        marginBottom: size[6],
        borderWidth: border["width"][1],
        borderColor: color["borderDark"][400],
        borderRadius: border["rounded"]["md"],
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: size[4],
        paddingVertical: size[2],
        position: "relative"
    },
    btnBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color["white"],
        padding: size[3],
        borderRadius: border["rounded"]["md"],
        position: "absolute",
        top: 0,
        right: size[16],
        gap: size[3],
        shadowColor: color["black"],
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: size[4],
        elevation: 2,
        opacity: 1
    },
    soundBtn: {
        borderWidth: border["width"][2],
        borderColor: color["rose"][500],
        backgroundColor: color["rose"][500],
        padding: size[2],
        borderRadius: border["rounded"]["full"]
    },
    bookmarkBtn: {
        borderWidth: border["width"][2],
        borderColor: color["indigo"][500],
        padding: size[3],
        borderRadius: border["rounded"]["full"]
    },
    bookmarkActive: {
        backgroundColor: color["indigo"][500]
    },
    plusBtn: {
        backgroundColor: color["teal"][500],
        padding: size[2],
        borderRadius: border["rounded"]["full"]
    }
})

export default function WordCard({ word, onOpenNewSentencesDialog }) {
    const { playSound } = useAudio(word?.phonetics?.audio || null)
    const [visible, setVisible] = React.useState(false)
    const [selectedTab, setSelectedTab] = React.useState("")
    const [dialogVisible, setDialogVisible] = React.useState(false)
    const [alertVisible, setAlertVisible] = React.useState(false)
    const dispatch = useDispatch()
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleTab = (tab) => {
        setSelectedTab(tab)
        setDialogVisible(true)
    }

    const handleDeleteWord = () => {
        dispatch(deleteWord(word.id))
    }

    const handleShow = () => {
        if (visible) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => setVisible(false));
        } else {
            setVisible(true);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    const handleDeleteSentences = (sentence) => {
        const wordSentences = word.sentences
        let copy = [...wordSentences.filter((item) => sentence.includes(item) === false)]
        dispatch(updateSentences({ id: word.id, sentences: copy }))
        handleCloseModal()
    }

    const handleCloseModal = () => {
        setDialogVisible(false)
        setSelectedTab("")
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <CardHeader word={word?.word} phoneticText={word?.phonetics?.text} onShowDropdown={handleShow} />
                <Animated.View
                    style={[
                        style.btnBox,
                        {
                            opacity: fadeAnim, // Bind opacity to animated value
                        },
                    ]}
                >
                    <Pressable onPress={() => onOpenNewSentencesDialog()} style={style.plusBtn}>
                        <PlusLarge size={28} color={color["white"]} />
                    </Pressable>
                    <Pressable onPress={() => setAlertVisible(true)} style={[style.bookmarkBtn, style.bookmarkActive]}>
                        <BookmarkFill size={18} color={color["white"]} />
                    </Pressable>
                    <Pressable onPress={() => playSound()} style={style.soundBtn}>
                        <VolumeUp size={24} color={color["white"]} />
                    </Pressable>
                </Animated.View>

            </View>
            <Tabs onChangeTab={handleTab} />
            <Dialog visible={dialogVisible} title={selectedTab} onClose={handleCloseModal}>
                {
                    selectedTab === "Sentences" ?
                        <SentencesList sentences={word.sentences} onDeleteSentences={handleDeleteSentences} />
                        :
                        selectedTab === "Definition" ? <DefinitionSide details={word.details} />
                            : <Text>Something went wrong</Text>
                }
            </Dialog>
            <CustomAlert 
                title="Delete word"
                content="Are you sure you want to delete this word?"
                visible={alertVisible} 
                onClose={() => setAlertVisible(false)} 
                onSubmit={handleDeleteWord}
            />
        </View>
    )
}