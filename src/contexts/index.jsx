import { useContext, createContext, useState } from "react";

// Create context
const ShowContext = createContext();

// Create provider
export const ShowProvider = ({children}) => {
    const [showData, setShowData] = useState([])

    return (
        <ShowContext.Provider value={{ showData, setShowData }}>
            {children}
        </ShowContext.Provider>
    )
}

// Create custom hook to consume context (state/data)
export const useShow = () => useContext(ShowContext);