import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { color } from '../../../style/color';
import { size } from '../../../style/size';
import { border } from '../../../style/border';
import { typography } from '../../../style/typography';


const style = StyleSheet.create({
    detailsList: {
        marginTop: size[2],
        paddingHorizontal: size[6],
    },
    partOfSpeech: {
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["lg"],
        color: color["textDark"][800],
        marginBottom: size[2],
    },
    definition: {
        marginBottom: size[4],
        fontFamily: "Comfortaa-Medium",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][800],
        borderWidth: border["width"][1],
        borderColor: color["textDark"][800],
        borderRadius: border["rounded"]["lg"],
        padding: size[3],

    },
    definitionItem: {
        fontFamily: "Comfortaa-Medium",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][800],
    },
    definitionItemExample: {
        fontFamily: "Comfortaa-Regular",
        fontSize: typography["fontSizes"]["sm"],
        color: color["textDark"][500],
    }
})

const getPartOfSpeechColor = (partOfSpeech) => {
    switch (partOfSpeech) {
        case "noun":
            return color["teal"][500]
        case "verb":
            return color["rose"][500]
        case "adjective":
            return color["teal"][500]
        case "adverb":
            return color["amber"][500]
        case "pronoun":
            return color["fuchsia"][500]
        case "preposition":
            return color["purple"][500]
        case "conjunction":
            return color["violet"][500]
        case "interjection":
            return color["pink"][500]
        case "abbreviation":
            return color["rose"][500]
        default:
            return color["cyan"][500]
    }
}

const DefinitonItem = ({ definitions, partOfSpeech}) => {
    return (
        <FlatList
            data={definitions}
            renderItem={({ item }) =>
                <View style={[style.definition, { borderColor: getPartOfSpeechColor(partOfSpeech) }]}>
                    <Text style={style.definitionItem}>{item.definition}</Text>
                    {
                        item.example && <Text style={style.definitionItemExample}>{item.example}</Text>
                    }
                </View>
            }
        />
    )
}

export const DefinitionSide = ({ details }) => {
    return (
        <FlatList
            data={details}
            renderItem={({ item }) =>
                <View style={[style.detailsList]}>
                    <Text style={[
                        style.partOfSpeech,
                        { color: getPartOfSpeechColor(item.partOfSpeech) }
                    ]}
                    >{item.partOfSpeech}</Text>
                    <DefinitonItem definitions={item.definitions} partOfSpeech={item.partOfSpeech} />
                </View>
            }
        />
    )
}