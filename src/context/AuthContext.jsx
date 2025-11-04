import { createContext, useContext, useState } from 'react';

//Criando o contexto
const AuthContext = createContext()

// Provider que envolve a app
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

//Hook para acessar o  contexto
export function useAuth() {
    return useContext(AuthContext)
}


