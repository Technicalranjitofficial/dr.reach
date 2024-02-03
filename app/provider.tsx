
"use client"
import { ReactNode } from "react";
import {SessionProvider} from "next-auth/react"
import { Provider } from "react-redux";
import { store } from "@/Redux/store/store";




interface Props{
    children:ReactNode
}

export function Providers(props:Props){


    return <Provider store={store}>
    
    <SessionProvider>
        {props.children}

    </SessionProvider>

    </Provider>
  
}