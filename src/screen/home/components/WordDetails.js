import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { fetchWords } from '../../../store/slice/wordSlice'

import { VolumeUp } from '../../../assets/icons/VolumeUp'
import { Bookmark } from '../../../assets/icons/Bookmark'
import { BookmarkFill } from '../../../assets/icons/BookmarkFill'
import { DefinitionSide } from './DefinitionSide'

import { saveWord, deleteWordByName } from '../../../services/word'

import useAudio from "../../../hooks/useAudio"
import { useAuth } from '../../../context/authContext'
import { useToast } from "../../../components/toast/useToast"

import { filterDetails, getPhonetics } from '../../../utils/util'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: size[16],
        borderTopLeftRadius: border["rounded"]["3xl"],
        borderTopRightRadius: border["rounded"]["3xl"],
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 32,
        elevation: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: size[6],
        paddingVertical: size[2],
        borderBottomColor: color["borderDark"][200],
        borderBottomWidth: border["width"][1]
    },
    btnBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: size[4]
    },
    soundBtn: {
        borderWidth: border["width"][2],
        borderColor: color["rose"][500],
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
    wordText: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["2xl"],
        color: color["textDark"][800]
    },
    phoneticsText: {
        fontFamily: "Comfortaa-Regular",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][600]
    },
})

export default function WordDetails({ word }) {
    const { getUser } = useAuth();
    const toast = useToast();
    const dispatch = useDispatch();

    const phonetic = getPhonetics(word?.phonetics);
    const details = filterDetails(word?.meanings);

    const { playSound } = useAudio(phonetic.audio);
    const [isBookmark, setIsBookmark] = useState(false);

    useEffect(() => {
        setIsBookmark(false);
    }, [word])

    const handleSaveWord = async () => {
        const data = {
            word: word.word,
            phonetics: phonetic,
            details: details,
            user_id: getUser().id,
            sentences: []
        }

        if (!isBookmark) {
            try {
                await saveWord(data);
                dispatch(fetchWords(getUser()?.id));
                setIsBookmark(true);
                toast.showToast("Word saved successfuly!", "success");
            } catch (error) {
                setIsBookmark(false);
                toast.showToast("Something went wrong!", "error");
                console.log(error);
            }
        }
        else {
            try {
                setIsBookmark(false);
                await deleteWordByName(data.word);
                dispatch(fetchWords(getUser()?.id));
                toast.showToast("Word removed successfuly!", "success");
            } catch (error) {
                setIsBookmark(true);
                toast.showToast("Something went wrong!", "error");
                console.log(error);
            }
        }
    }

    
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View>
                    <Text style={style.wordText}>{word?.word}</Text>
                    <Text style={style.phoneticsText}>{phonetic.text}</Text>
                </View>
                <View style={style.btnBox}>
                    <Pressable onPress={() => handleSaveWord()} style={[style.bookmarkBtn, isBookmark && style.bookmarkActive]}>
                        {
                            isBookmark ?
                                <BookmarkFill size={18} color={color["white"]} />
                                :
                                <Bookmark size={18} color={color["indigo"][500]} />
                        }
                    </Pressable>
                    <Pressable onPress={() => playSound()} style={style.soundBtn}>
                        <VolumeUp size={24} color={color["rose"][500]} />
                    </Pressable>
                </View>
            </View>
            <DefinitionSide details={details} />
        </View>
    )
}