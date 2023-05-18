import { useState } from "react"
import { AppContext } from './context.js'

const ContextCompo = ({children}) => {

    return (
        <AppContext.Provider value={{}}>
            { children }
        </AppContext.Provider>
    )
}

export default ContextCompo