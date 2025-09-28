import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

export const UserSlice = createSlice({
    name:'userslice',
    initialState:{
        users:[]
    },

    reducers:{
        setUser:(state,action)=>{
            state.users.push(action.payload)
        }
    }
})

export const {setUser}=UserSlice.actions;