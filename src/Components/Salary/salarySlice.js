import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { salaryLink } from '../../APILink/allAPIexport';


export const getSalary = createAsyncThunk (
    'salary/getSalary', 
    async () => {
    return await fetch(salaryLink).then((data) => data.json())
})

const salaryInfo =  createSlice({
    name: 'salary',

    initialState: { status: 'idle', salary: [] },

    reducers: {
        deptFilter: (state, action) => {
            state.status = "success";
            state.salary = action.payload;
        }
    },

    extraReducers: {
        [getSalary.pending]: (state, action) => {
            state.status = "loading";
        },
        [getSalary.fulfilled]: (state, action) => {
            state.status = "success";
            state.salary = action.payload;
        },  
        [getSalary.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export default salaryInfo;