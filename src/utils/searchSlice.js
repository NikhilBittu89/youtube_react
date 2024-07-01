/*
*i api call
*ip api call
*iph api call
*if we type iphone itb call api if we slach back aslo api call to ignore we created search slice
*
*
*/
import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{

            state=Object.assign(state,action.payload);
        }
    }
})

export const{cacheResult}=searchSlice.actions;
export default searchSlice.reducer;