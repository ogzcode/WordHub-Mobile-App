import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";
import Loading from "../components/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState("");

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
        })

        supabase.auth.getSession().then((session) => {
            setSession(session.data.session);
        })
    }, []);

    const getUser = () => {
        return session?.user || null;
    }

    const getSession = () => {
        return session?.data.session ?? null;
    }

    if (session === "") return <Loading />;

    return (
        <AuthContext.Provider value={{ session, getUser, getSession }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);