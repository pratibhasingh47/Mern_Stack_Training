import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:5000/api/product",data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
export const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.get("http://localhost:5000/api/product",data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


const initialState = {
    isLoading : false,
    error : null,
    products : [],
    isProductAdded : false
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        
    },
    extraReducers :(builder)=>{
        builder
        .addCase(addProduct.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(addProduct.fulfilled , (state,action)=>{
            state.isProductAdded  =true ;
            state.isLoading = false,
            state.error = null
        })
        .addCase(addProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(getAllProduct.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getAllProduct.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.products = action.payload.data.data,
            state.error = null
        })
        .addCase(getAllProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
    }
});

export const {  }  = productSlice.actions;

export default productSlice.reducer;







// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// export const addProduct = createAsyncThunk("product/addProduct", async (data, { rejectWithValue }) => {
//     try {
//         const response = await axios.post("http://localhost:5000/api/product", data);
//         return response.data.data;
//     } catch (error) {
//         rejectWithValue(error);
//     }
// })

// export const getAllProduct = createAsyncThunk("product/getAllProduct", async (data, { rejectWithValue }) => {
//     try {
//         const response = await axios.post("http://localhost:5000/api/product", data);
//         localStorage.setItem("token", response.data.token);
//         return response.data.data;
//     } catch (error) {
//         rejectWithValue(error);
//     }
// })

// const initialState = {
//     isLoading: false,
//     error: null,
//     products: []
// }

// const productSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addProduct.pending, (state, action) => {
//                 state.isLoading = true;
//                 state.user = null
//             })
//             .addCase(addProduct.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.user = action.payload
//             })
//             .addCase(addProduct.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload
//             })
//             .addCase(getAllProduct.pending, (state, action) => {
//                 state.isLoading = true;
//                 state.user = null
//             })
//             .addCase(getAllProduct.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.products = action.payload.data.data,
//                     state.isAuth = true;
//             })
//             .addCase(getAllProduct.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload
//             })
//     }
// })

// export const { } = productSlice.actions;


// export default productSlice.reducer;