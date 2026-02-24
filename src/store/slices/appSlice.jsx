import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:"Bitu",
    theme :"light"
};

const appSlice = createSlice({
    name : "app",
    initialState,
    reducers:{
        toggleTheme:(state) =>{
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        setUser:(state, action)=>{
            state.name = action.payload ;
        }
    }
})