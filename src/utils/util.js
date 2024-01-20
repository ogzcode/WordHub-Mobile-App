export const getPhonetics = (phonetics) => {
    const data = {
        text: "",
        audio: "",
    };

    if (phonetics.length === 0) {
        return data;
    }

    for (let i = 0; i < phonetics.length; i++) {
        if (phonetics[i].text && data.text === "") {
            data.text = phonetics[i].text;
        }

        if (phonetics[i].audio && data.audio === "") {
            data.audio = phonetics[i].audio;
        }

        if (data.text !== "" && data.audio !== "") {
            break;
        }
    }

    return data;
};

export const filterDetails = (details) => {
    return details.map((item) => {
        return {
            partOfSpeech: item.partOfSpeech,
            definitions: item.definitions.map((def) => {
                return {
                    definition: def.definition,
                    example: def.example,
                };
            }),
        };
    });
};

export const getRandomWords = (wordList, foundedList) => {
    const filteredWords = wordList.filter(word => foundedList.includes(word.word) === false);
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex].word;
}