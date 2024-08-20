import React, { useState, createContext } from "react";

export const FunctionsContext = createContext();

export const FunctionsProvider = ({children}) => {

    const handleProjectEdit = () => {

    };

    const handleProjectDelete = () => {

    };

    const handleExperienceEdit = () => {

    };

    const handleExperienceDelete = () => {

    };

    return (
        <FunctionsContext.Provider
            value={{
                handleProjectEdit,
                handleProjectDelete,
                handleExperienceEdit,
                handleExperienceDelete
            }}
            >
                {children}
            </FunctionsContext.Provider>
    )
}