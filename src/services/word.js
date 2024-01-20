import { supabase } from "../supabase";

export const searchWordFromAPI = async (word) => {
    return await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
}

export const saveWord = async (word) => {
    return await supabase
        .from('words')
        .insert(word)
}

export const deleteWordByName = async (word) => {
    return await supabase
        .from('words')
        .delete()
        .eq('word', word)
}

export const getWordsByUserId = async (userId) => {
    return await supabase
        .from('words')
        .select('*')
        .eq('user_id', userId)
}

export const deleteWordById = async (id) => {
    return await supabase
        .from('words')
        .delete()
        .eq('id', id)
}

export const updateSentencesByWordId = async (id, sentences) => {
    return await supabase
        .from("words")
        .update({
            sentences: sentences
        })
        .eq("id", id);
}

