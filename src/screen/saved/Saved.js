import React, { useEffect, useMemo } from 'react'
import { View, StyleSheet, TextInput, ScrollView, Text, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { fetchWords, setSelectedWordAndTab } from '../../store/slice/wordSlice'

import { useAuth } from "../../context/authContext"

import NoData from './components/NoData'
import WordCard from './components/WordCard'
import Loading from '../../components/Loading'
import Dialog from '../../components/Dialog'
import SentencesList from './components/SentencesList'
import { DefinitionSide } from '../home/components/DefinitionSide'

import { color } from '../../style/color'
import { size } from '../../style/size'
import { border } from '../../style/border'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchBox: {
        paddingHorizontal: size[6],
        marginVertical: size[8],
        zIndex: 1,
    },
    searchInput: {
        padding: size[3],
        backgroundColor: color["white"],
        borderRadius: border["rounded"]["lg"],
        color: color["textDark"][700],
        fontFamily: "Comfortaa-Bold",
        fontSize: size[4],
        borderWidth: border["width"][1],
        borderColor: color["borderDark"][400],
    },
    paginateBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: size[8],
        paddingHorizontal: size[4],
        paddingTop: size[2],
        paddingBottom: size[4],
    },
    paginateBtn: {
        padding: size[3],
        borderRadius: border["rounded"]["full"],
        backgroundColor: color["rose"][50]
    }
})

export default function Saved() {
    const { getUser } = useAuth()
    const { words, loading, selectedWord, selectedTab } = useSelector((state) => state.word)
    const [search, setSearch] = React.useState("")
    const [modalVisible, setModalVisible] = React.useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const id = getUser().id
        dispatch(fetchWords(id))
    }, [])

    useEffect(() => {
        if (selectedWord) {
            setModalVisible(true)
        }
    }, [selectedWord])

    const displayWordData = useMemo(() => {
        return words
            .filter((item) => {
                return item.word.toLowerCase().includes(search.toLowerCase())
            })
    }, [search, words])

    const handleCloseModal = () => {
        setModalVisible(false)
        dispatch(setSelectedWordAndTab({ word: null, tab: "" }))
    }


    return (
        <View style={style.container}>
            <View style={style.searchBox}>
                <TextInput value={search} onChangeText={setSearch} style={style.searchInput} placeholder="Search" />
            </View>
            {
                loading ? <Loading /> :
                    displayWordData.length > 0 ?
                        <ScrollView style={style.flatList}>
                            {
                                displayWordData.map((item) => {
                                    return (
                                        <WordCard word={item} key={item.id.toString()} />
                                    )
                                })
                            }
                        </ScrollView>
                        :
                        <NoData />
            }
            <Dialog visible={modalVisible} title={selectedTab} onClose={handleCloseModal}>
                {
                    selectedTab === "Sentences" ?
                        <SentencesList sentences={selectedWord.sentences} />
                            :
                        selectedTab === "Definition" ? <DefinitionSide details={selectedWord.details} />
                            : <Text>Something went wrong</Text>
                }
            </Dialog>
        </View>
    )
}