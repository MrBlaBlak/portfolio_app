'use client'
import React, {ReactNode} from 'react';
import {useAppSelector} from "@/app/redux/hooks";

type Props = { children: ReactNode };
const ThemeProvider = ({children}: Props) => {
    const {theme} = useAppSelector((state) => state.themes);
    return (<div className="bg-base-200" data-theme={theme}>
        {children}
    </div>)
};
export default ThemeProvider;