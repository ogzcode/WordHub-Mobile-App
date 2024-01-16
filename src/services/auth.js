import { supabase } from "../supabase.js";

const login = async (email, password) => {
    return await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
}

const signup = async (email, password) => {
    return await supabase.auth.signUp({
        email: email,
        password: password
    });
}

const logout = async () => {
    return await supabase.auth.signOut();
}

export {
    login,
    signup,
    logout,
};