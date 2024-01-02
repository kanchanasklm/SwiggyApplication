
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
});

export default store;



/**
 * create store
 * -configureStore()-RTK
 * 
 * Provide my store to app
 * -<Provider store={store}>-import from react-redux
 * 
 * Slice
 * RTK-createSlice({
 * name:"",
 * initialState:
 * reducers:{
 * addItem:(state,actions)=>{state=action.payload}
 * }
 * })
 * export const {addItem,removeItem}=cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * put that slice into store 
 * -{
 * reducer:{
 * cart:cartSlice
 * }
 * }
 */