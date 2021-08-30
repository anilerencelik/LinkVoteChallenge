import React, { createContext, useContext, useReducer } from 'react';

export const UrlLayerContext = createContext();

export const UrlLayer = ({ initialState, reducer, children }) => (
    <UrlLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </UrlLayerContext.Provider>
);

export const useUrlLayerValue = () => useContext(UrlLayerContext);