import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deptLink } from '../../APILink/allAPIexport';


export const getDept = createAsyncThunk (
    'department/getDepts', 
    async () => {
    return await fetch(deptLink).then((data) => data.json())
})

const depts =  createSlice({
    name: 'department',

    initialState: { status: 'idle', departments: [] },

    reducers: {
        deptFilter: (state, action) => {
            state.status = "success";
            state.departments = action.payload;
        }
    },

    extraReducers: {
        [getDept.pending]: (state, action) => {
            state.status = "loading";
        },
        [getDept.fulfilled]: (state, action) => {
            state.status = "success";
            state.departments = action.payload;
        },  
        [getDept.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export default depts;