import {createContext, useState} from "react";

export const UpdateContext = createContext({
    change: null,
    setChange: () => null,
});

export const UserProvider = ({children} )=>{
    const [change,setChange]=useState(null);
    const value = {change,setChange};

    return <UpdateContext.Provider value={value}>{children}</UpdateContext.Provider>;
};
