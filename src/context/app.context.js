import { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [colours, setColours] = useState([]);

    const value = {
        colours,
        setColours
    }

    return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
}

export default AppProvider