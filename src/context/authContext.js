import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";
import Loading from "../components/Loading";
import { size } from "../style/size";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
        })

        supabase.auth.getSession().then((session) => {
            setSession(session);
        })
    }, []);

    const getUser = () => {
        return session?.data?.session?.user || null;
    }

    const getSession = () => {
        return session?.data.session ?? null;
    }

    return (
        <AuthContext.Provider value={{ session, getUser, getSession }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);