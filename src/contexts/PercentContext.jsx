import { createContext, useState } from "react";

const PercentContext = createContext({})


const PercentProvider = ({ children }) => {
    
    const [percentage, setPercentage] = useState(0)

    return (
        <PercentContext.Provider value={{percentage, setPercentage}}>
            {children}
        </PercentContext.Provider>
    )
}

export { PercentContext, PercentProvider }