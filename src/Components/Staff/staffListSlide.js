import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { staffLink } from "../../APILink/allAPIexport";

export const getStaffs = createAsyncThunk (
    'staffs/getStaffs', 
    async () => {
    return await fetch(staffLink).then((data) => data.json())
})

export const postStaff = createAsyncThunk (
    'staffs/postStaff',
    async (newStaff) => {    
    const res = fetch(staffLink, {
    method: 'POST',
    body: JSON.stringify(newStaff),
    headers: {
        "Content-Type": "application/json"
    }
    }).then(data => data.json())
    return res
    }
);

export const delStaff = createAsyncThunk (
    'staffs/delStaff',
    async (staffId) => {    
    const res = fetch(staffLink + '/' + staffId, {
    method: 'DELETE',
    headers: {
        "Content-Type": "application/json"
    }
    }).then(data => data.json())
    return res
    }
);

export const patchStaff = createAsyncThunk (
    'staffs/patchStaff',
    async (staffId, staffInfo) => {    
    const res = fetch(staffLink + '/' + staffId, {
    method: 'PATCH',
    body: JSON.stringify(staffInfo),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    }).then(data => data.json())
    return res
    }
);


const staffListSlice = createSlice({
    name: 'staffList',

    initialState: { status: 'idle', staffs: [] },

    reducers: {
        addStaff: (state, action) => {
            state.staffs.push(action.payload);
        },
        deleteStaff: (state, action) => {
            state.staffs.filter((message) => message.id !== action.payload)
        }
    },

    extraReducers: {
        [getStaffs.pending]: (state, action) => {
            state.status = "loading";
        },
        [getStaffs.fulfilled]: (state, action) => {
            state.status = "success";
            state.staffs = action.payload;
        },
        [getStaffs.rejected]: (state, action) => {
            state.status = "failed"
        },
        [postStaff.pending]: (state, action) => {
            state.status = "loading";
        },
        [postStaff.fulfilled]: (state, action) => {
            state.status = "success";
            state.staffs = action.payload
            // state.staffs.push(action.payload);
        },
        [postStaff.rejected]: (state, action) => {
            state.status = "failed";
        },
        [delStaff.pending]: (state, action) => {
            state.status = "loading";
        },
        [delStaff.fulfilled]: (state, action) => {
            // state.staffs.filter((message) => message.id !== action.payload)
            console.log({state, action})
            state.status = "success";
            state.staffs = action.payload;

        },
        [delStaff.rejected]: (state, action) => {
            state.status = "failed";
        },
        [patchStaff.pending]: (state, action) => {
            state.status = "loading";
        },
        [patchStaff.fulfilled]: (state, action) => {
            console.log({state, action})
            state.status = "success";
        },
        [patchStaff.rejected]: (state, aciton) => {
            state.status = "failed";
        }
    }
})

export default staffListSlice;