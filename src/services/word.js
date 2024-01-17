import { supabase } from "../supabase";

export const searchWordFromAPI = async (word) => {
    return await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
}

