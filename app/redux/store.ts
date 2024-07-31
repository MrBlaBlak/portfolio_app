import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './themeSlice'

export const makeStore = () => {
    return configureStore({
        reducer:{
            themes: themeReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']