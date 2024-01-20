import React, { useEffect, useMemo, useState } from 'react'
import { View, StyleSheet, TextInput, ScrollView, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { fetchWords, setSelectedWordAndTab, updateSentences } from '../../store/slice/wordSlice'

import { useAuth } from "../../context/authContext"

import NoData from './components/NoData'
import WordCard from './components/WordCard'
import Loading from '../../components/Loading'
import Dialog from '../../components/Dialog'
import SentencesList from './components/SentencesList'
import { DefinitionSide } from '../home/components/DefinitionSide'
import NewSentencesForm from './components/NewSentencesForm'

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
})

export default function Saved() {
    const { getUser } = useAuth()
    const { words, loading, selectedWord, selectedTab } = useSelector((state) => state.word)
    const [search, setSearch] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [newSentencesVisible, setNewSentencesVisible] = useState(false)
    const [selectedIdForSentences, setSelectedIdForSentences] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        const id = getUser()?.id
        dispatch(fetchWords(id))
    }, [])

    useEffect(() => {
        if (selectedWord) {
            setModalVisible(true)
        }
    }, [selectedWord])

    const displayWordData = useMemo(() => {
        return words?.filter((item) => {
            return item.word.toLowerCase().includes(search.toLowerCase())
        }) || []
    }, [search, words])

    const handleCloseModal = () => {
        setModalVisible(false)
        dispatch(setSelectedWordAndTab({ word: null, tab: "" }))
    }

    const handleAddNewSentences = (sentence) => {
        const wordSentences = words.find((item) => item.id === selectedIdForSentences).sentences
        let copy = [...wordSentences, sentence]
        dispatch(updateSentences({ id: selectedIdForSentences, sentences: copy }))
        setNewSentencesVisible(false)
        setSelectedIdForSentences(null)
    }

    const handleDeleteSentences = (sentence) => {
        const wordSentences = words.find((item) => item.id === selectedWord.id).sentences
        let copy = [...wordSentences.filter((item) => sentence.includes(item) === false)]
        dispatch(updateSentences({ id: selectedWord.id, sentences: copy }))
        handleCloseModal()
    }

    return (
        <View style={style.container}>
            <View style={style.searchBox}>
                <TextInput value={search} onChangeText={setSearch} style={style.searchInput} placeholder="Search" />
            </View>
            {
                loading ? <Loading /> :
                    displayWordData?.length > 0 ?
                        <ScrollView style={style.flatList}>
                            {
                                displayWordData?.map((item) => {
                                    return (
                                        <WordCard
                                            word={item}
                                            key={item.id.toString()}
                                            onOpenNewSentencesDialog={() => {
                                                setNewSentencesVisible(true)
                                                setSelectedIdForSentences(item.id)
                                            }}
                                        />
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
                        <SentencesList sentences={selectedWord.sentences} onDeleteSentences={handleDeleteSentences} />
                        :
                        selectedTab === "Definition" ? <DefinitionSide details={selectedWord.details} />
                            : <Text>Something went wrong</Text>
                }
            </Dialog>
            <Dialog
                visible={newSentencesVisible}
                title="Add new sentences"
                onClose={() => {
                    setNewSentencesVisible(false)
                    setSelectedIdForSentences(null)
                }}
            >
                {
                    selectedIdForSentences && <NewSentencesForm
                        wordId={selectedIdForSentences}
                        onCancel={() => {
                            setNewSentencesVisible(false)
                            setSelectedIdForSentences(null)
                        }}
                        onSubmit={handleAddNewSentences}
                    />}
            </Dialog>
        </View>
    )
}