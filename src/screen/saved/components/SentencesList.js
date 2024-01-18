import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { color } from '../../../style/color'
import { size } from '../../../style/size'
import { border } from '../../../style/border'
import { typography } from '../../../style/typography'

const styles = StyleSheet.create({
    container: {
        padding: size[6],
    },
    item: {
        paddingVertical: size[3],
        paddingHorizontal: size[4],
        borderRadius: border["rounded"]["md"],
        borderWidth: border["width"][1],
        borderColor: color["rose"][400],
        marginBottom: size[4],
        fontFamily: "Comfortaa-Bold",
        fontSize: typography["fontSizes"]["md"],
        color: color["textDark"][800],
    }
})

export default function SentencesList ({ sentences }) {
    return (
        <ScrollView style={styles.container}>
            {
                sentences.map((item, index) => <Text style={styles.item} key={index}>{item}</Text>)
            }
        </ScrollView>
    )
}