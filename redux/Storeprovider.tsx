"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface StoreProviderProps {
    children: React.ReactNode
}

export default function Storeprovider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
            { children }

    </Provider>
  )
}
