import React, { useEffect, useMemo, useState } from 'react'
import { View, StyleSheet, TextInput, ScrollView, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { fetchWords, updateSentences } from '../../store/slice/wordSlice'

import { useAuth } from "../../context/authContext"

import NoData from './components/NoData'
import WordCard from './components/WordCard'
import Loading from '../../components/Loading'
import Dialog from '../../components/Dialog'
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
    const { words, loading } = useSelector((state) => state.word)
    const [search, setSearch] = useState("")
    const [newSentencesVisible, setNewSentencesVisible] = useState(false)
    const [selectedIdForSentences, setSelectedIdForSentences] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const id = getUser()?.id
        dispatch(fetchWords(id))
    }, [])

    const onRefresh = () => {
        setRefreshing(true)
        const id = getUser()?.id
        dispatch(fetchWords(id))
        setRefreshing(false)
    }

    const displayWordData = useMemo(() => {
        return words?.filter((item) => {
            return item.word.toLowerCase().includes(search.toLowerCase())
        }) || []
    }, [search, words])

    const handleAddNewSentences = (sentence) => {
        const wordSentences = words.find((item) => item.id === selectedIdForSentences).sentences
        let copy = [...wordSentences, sentence]
        dispatch(updateSentences({ id: selectedIdForSentences, sentences: copy }))
        setNewSentencesVisible(false)
        setSelectedIdForSentences(null)
    }

    return (
        <View style={style.container}>
            <View style={style.searchBox}>
                <TextInput value={search} onChangeText={setSearch} style={style.searchInput} placeholder="Search" />
            </View>
            {
                loading ? <Loading /> :
                    <ScrollView style={style.flatList} refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                            progressBackgroundColor={color["rose"][500]}
                            colors={[color["white"]]}
                        />
                    }>
                        {
                            displayWordData?.length > 0 ? displayWordData?.map((item) => {
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
                            }) : <NoData />
                        }
                    </ScrollView>
            }
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