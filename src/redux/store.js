import { configureStore } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import filterSlide from "../Components/Staff/filterSlide";
import staffListSlide from "../Components/Staff/staffListSlide";
import departmentSlide from '../Components/Department/departmentSlide';
import salarySlice from "../Components/Salary/salarySlice";
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const store = configureStore({
    reducer: {
      filters: filterSlide.reducer,
      staffList: staffListSlide.reducer,
      department: departmentSlide.reducer,
      salary: salarySlice.reducer,
    },
    // middleware: [loggerMiddleware, thunkMiddleware],
    middleware: [logger, thunk],
    enhancers: [monitorReducerEnhancer]
  })
  
export default store; 