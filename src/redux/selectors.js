import { createSelector } from '@reduxjs/toolkit';

export const addStaffSelector = (state) => state.staffList.staffs;
export const searchStaffSelector = (state) => state.filters.search;



export const staffRemaining = createSelector(
    addStaffSelector,
    searchStaffSelector,
    (staffsList, searchStaff) => {
        return staffsList.filter(staff => {
            return staff.name.toLowerCase().includes(searchStaff.toLowerCase());
        })
    }
)


// export const updateHRDepartment = (state) => {
//     const staffRemaining = state.staffList.staffs.filter((staff) => {
//         return staff.department.includes('HR');
//     })
//     return staffRemaining.length;
// }

// export const updateFinaneDepartment = (state) => {
//     const staffRemaining = state.staffList.staffs.filter((staff) => {
//         return staff.department.includes('Finance');
//     })
//     return staffRemaining.length;
// }

// export const updateSaleDepartment = (state) => {
//     const staffRemaining = state.staffList.staffs.filter((staff) => {
//         return staff.department.includes('Sale');
//     })
//     return staffRemaining.length;
// }

// export const updateMarketingDepartment = (state) => {
//     const staffRemaining = state.staffList.staffs.filter((staff) => {
//         return staff.department.includes('Marketing');
//     })
//     return staffRemaining.length;
// }

// export const updateITDepartment = (state) => {
//     const staffRemaining = state.staffList.staffs.filter((staff) => {
//         return staff.department.includes('IT');
//     })
//     return staffRemaining.length;
// }
